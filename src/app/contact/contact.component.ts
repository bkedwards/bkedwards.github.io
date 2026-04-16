import {Component, ElementRef, signal, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {faAngular, faCss3, faGitAlt, faHtml5, faJs, faReact,} from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import {Subscription} from 'rxjs';
import * as THREE from 'three';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faReact = faReact;
  faJs = faJs;
  faGitAlt = faGitAlt;
  @ViewChildren('fadeItem') fadeItems!: QueryList<ElementRef>;

  private fadeObserver!: IntersectionObserver;
  private fadeItemsSub?: Subscription;

  ngAfterViewInit(): void {
    this.fadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.fadeObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        },
    );

    this.observeFadeItems();

    this.fadeItemsSub = this.fadeItems.changes.subscribe(() => {
      this.observeFadeItems();
    });
  }

  private observeFadeItems(): void {
    this.fadeItems.forEach((item) => {
      const el = item.nativeElement;

      if (!el.classList.contains('visible')) {
        this.fadeObserver.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.fadeObserver?.disconnect();
  }

  sendEmailTriggered = signal(false);
  emailSuccess = signal(false);
  isSending = signal(false);

  sendEmail(event: Event): void {
    event.preventDefault();
    this.isSending.set(true);
    emailjs
      .sendForm(
        'service_4wl205l',
        'template_g2rnp8p',
        event.target as HTMLFormElement,
        'SQCU20t7kVZpEjRV-',
      )
      .then(
        () => {
          this.sendEmailTriggered.set(true);
          this.emailSuccess.set(true);
          this.isSending.set(false);
        },
        (error) => {
          this.sendEmailTriggered.set(true);
          this.isSending.set(false);
          alert('Failed to send email. Please try again.');
        },
      );
  }
}
