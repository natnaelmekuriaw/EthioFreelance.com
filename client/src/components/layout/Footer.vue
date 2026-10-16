<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="brand"
            ><img src="/brand/logo-horizontal-light.svg" alt="EthioFreelance"
          /></router-link>
          <p>
            Find meaningful work and connect with the people who can help bring
            your project to life.
          </p>
          <div class="social-icons" aria-label="Social platforms">
            <span
              class="social-icon social-facebook"
              role="img"
              aria-label="Facebook"
              title="Facebook"
              ><i class="fab fa-facebook-f" aria-hidden="true"></i
            ></span>
            <span
              class="social-icon social-twitter"
              role="img"
              aria-label="Twitter"
              title="Twitter"
              ><i class="fab fa-twitter" aria-hidden="true"></i
            ></span>
            <span
              class="social-icon social-telegram"
              role="img"
              aria-label="Telegram"
              title="Telegram"
              ><i class="fab fa-telegram-plane" aria-hidden="true"></i
            ></span>
            <span
              class="social-icon social-linkedin"
              role="img"
              aria-label="LinkedIn"
              title="LinkedIn"
              ><i class="fab fa-linkedin-in" aria-hidden="true"></i
            ></span>
          </div>
        </div>
        <div class="footer-column">
          <h2>Explore</h2>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About us</router-link>
          <router-link to="/about#how-it-works">How it works</router-link>
          <router-link to="/jobs">Browse jobs</router-link>
          <router-link to="/talent">Find talent</router-link>
        </div>
        <div class="footer-column">
          <h2>{{ detailslinks.detail }}</h2>
          <router-link to="/help#support">{{
            detailslinks.report
          }}</router-link>
          <router-link to="/help#payments">{{
            detailslinks.orderingpayment
          }}</router-link>
          <router-link to="/help#payments">{{
            detailslinks.payment
          }}</router-link>
          <router-link to="/policies">{{ detailslinks.policy }}</router-link>
        </div>
        <div class="footer-column">
          <h2>{{ helplinks.help }}</h2>
          <router-link to="/help#earning">{{
            helplinks.howtoearn
          }}</router-link>
          <router-link to="/help#support">{{ helplinks.support }}</router-link>
          <router-link to="/help#earning">{{ helplinks.tips }}</router-link>
          <router-link to="/help#faq">{{ helplinks.FAQ }}</router-link>
        </div>
      </div>
      <div class="footer-bottom-content">
        <div class="contact-info">
          <span
            ><MapPin :size="17" aria-hidden="true" />{{
              ourAddress.location
            }}</span
          >
          <span
            ><Phone :size="17" aria-hidden="true" />{{
              ourAddress.phonenumber
            }}</span
          >
          <a :href="`mailto:${ourAddress.email}`" class="mail">
            <span>
              <Mail :size="17" aria-hidden="true" />{{ ourAddress.email }}</span
            >
          </a>
        </div>
        <VeeForm
          :validation-schema="feedbackSchema"
          :initial-values="{ message: '', email: '' }"
          @submit="postData"
          v-slot="{ isSubmitting }"
          class="feedback-form"
          novalidate
        >
          <label for="footer-comment">Share your feedback</label>
          <p v-if="feedbackError" class="feedback-error" role="alert">
            {{ feedbackError }}
          </p>
          <p v-if="feedbackSent" class="feedback-success" role="status">
            Thanks for sharing your feedback.
          </p>
          <div class="feedback-fields">
            <Field name="message" v-slot="{ field, errors, meta }">
              <div>
                <textarea
                  v-bind="field"
                  id="footer-comment"
                  placeholder="Your comment"
                  :aria-invalid="
                    meta.touched && errors.length ? 'true' : undefined
                  "
                  aria-describedby="footer-comment-error"
                ></textarea>
                <small
                  v-if="meta.touched && errors.length"
                  id="footer-comment-error"
                  class="feedback-error"
                  role="alert"
                  >{{ errors[0] }}</small
                >
              </div>
            </Field>
            <div class="feedback-submit">
              <Field name="email" v-slot="{ field, errors, meta }">
                <div class="email-field">
                  <input
                    v-bind="field"
                    type="email"
                    placeholder="Email (optional)"
                    aria-label="Email (optional)"
                    :aria-invalid="
                      meta.touched && errors.length ? 'true' : undefined
                    "
                    aria-describedby="footer-email-error"
                  />
                  <small
                    v-if="meta.touched && errors.length"
                    id="footer-email-error"
                    class="feedback-error"
                    role="alert"
                    >{{ errors[0] }}</small
                  >
                </div>
              </Field>
              <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? "Sending…" : "Submit" }}
                <ArrowRight :size="16" aria-hidden="true" />
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
      <div class="copyright">
        <span>&copy; {{ currentYear }} EthioFreelance</span
        ><span>Built for the work ahead.</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { sendFeedback } from "../../services/feedback";
import { Form as VeeForm, Field } from "vee-validate";
import { feedbackSchema, FeedbackValues } from "../../forms/feedback";
import { formErrorMessage } from "../../forms/error";
import { notify } from "../../ui/notifications";
import { ArrowRight, Mail, MapPin, Phone } from "@lucide/vue";
export default {
  name: "footerComponent",
  components: { VeeForm, Field, ArrowRight, Mail, MapPin, Phone },
  data() {
    return {
      feedbackSchema,
      feedbackError: "",
      feedbackSent: false,
      currentYear: new Date().getFullYear(),
      detailslinks: {
        detail: "Details",
        report: "Report",
        orderingpayment: "Ordering and Payment",
        payment: "Payment",
        policy: " Policy and Privacy",
      },
      helplinks: {
        help: "Help",
        howtoearn: "How to earn",
        support: "Support",
        tips: "Tips",
        FAQ: "FAQ",
      },
      ourAddress: {
        phonenumber: "+251-941-78-2315",
        email: "natnaelmekuriaw50@gmail.com",
        location: "Addis Ababa, Ethiopia",
      },
    };
  },
  methods: {
    async postData(values: FeedbackValues) {
      this.feedbackError = "";
      this.feedbackSent = false;
      try {
        await sendFeedback(values);
        this.feedbackSent = true;
        notify("Thanks for sharing your feedback.", "success");
      } catch (error) {
        this.feedbackError = formErrorMessage(error);
        notify(this.feedbackError, "error");
      }
    },
  },
};
</script>

<style scoped>
.site-footer {
  background: var(--nav);
  color: #d3e6de;
  text-align: left;
}
.footer-inner {
  max-width: var(--page-width);
  padding: 72px var(--page-gutter) 28px;
  margin: auto;
}
.footer-top {
  display: grid;
  grid-template-columns: 2.1fr repeat(3, 1fr);
  gap: 44px;
  padding-bottom: 54px;
}
.brand {
  display: inline-flex;
  align-items: center;
  margin-bottom: 18px;
}
.brand img {
  display: block;
  width: min(100%, 235px);
  height: auto;
}
.footer-brand p {
  max-width: 330px;
  color: #adc6ba;
  font-size: var(--text-sm);
  line-height: var(--leading-body);
}
.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 23px;
}
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border: 1px solid #456269;
  border-radius: 12px;
  background: #1d3b41;
  color: #d7ece5;
  font-size: 16px;
  transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s,
    box-shadow 0.2s;
}
.social-icon:hover {
  color: white;
  background: var(--social-color);
  border-color: var(--social-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
}
.social-facebook {
  --social-color: #4267b2;
}
.social-twitter {
  --social-color: #1da1f2;
}
.social-telegram {
  --social-color: #229ed9;
}
.social-linkedin {
  --social-color: #0a66c2;
}
@media (prefers-reduced-motion: reduce) {
  .social-icon {
    transition: none;
  }
  .social-icon:hover {
    transform: none;
  }
}
.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
}
.footer-column h2 {
  margin: 3px 0 12px;
  color: white;
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--weight-strong);
  letter-spacing: -0.01em;
}
.footer-column a {
  color: #c2d7cc;
  font-size: var(--text-sm);
  line-height: 1.5;
  transition: color 0.2s, transform 0.2s;
}
.footer-column a:hover,
.footer-column a:focus-visible {
  color: white;
  transform: translateX(3px);
  text-decoration: none;
}
.footer-bottom-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 34px 0;
  border-top: 1px solid #2b4850;
}
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  font-size: 0.9rem;
}
.contact-info span {
  display: flex;
  align-items: center;
  gap: 12px;
}
.contact-info svg {
  width: 20px;
  color: var(--focus);
}
.feedback-form label {
  display: block;
  margin-bottom: 13px;
  color: white;
  font-weight: var(--weight-strong);
}
.feedback-fields {
  display: grid;
  gap: 10px;
}
.feedback-fields textarea,
.feedback-fields input {
  width: 100%;
  border: 1px solid #446268;
  border-radius: 10px;
  padding: 11px 13px;
  background: #1c3b40;
  color: white;
  font-size: var(--text-sm);
  outline: none;
}
.feedback-fields textarea {
  min-height: 75px;
  resize: vertical;
}
.feedback-fields input::placeholder,
.feedback-fields textarea::placeholder {
  color: #9eb7b1;
}
.feedback-fields textarea:focus,
.feedback-fields input:focus {
  border-color: var(--focus);
  background: #23474b;
}
.feedback-fields [aria-invalid="true"] {
  border-color: #ff9b9b;
}
.feedback-error {
  display: block;
  margin: 0 0 8px;
  color: #ffc5c5;
  font-size: var(--text-xs);
}
.feedback-success {
  margin: 0 0 8px;
  color: #bcebd2;
  font-size: var(--text-sm);
}
.feedback-submit {
  display: flex;
  gap: 10px;
}
.email-field {
  flex: 1;
}
.feedback-submit button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 10px;
  padding: 10px 19px;
  background: var(--accent);
  color: white;
  font-size: var(--text-sm);
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
}
.feedback-submit button:hover,
.feedback-submit button:focus-visible {
  background: #0aa58a;
  transform: translateY(-2px);
}
.feedback-submit button:disabled {
  opacity: 0.65;
  cursor: wait;
  transform: none;
}
.copyright {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 23px;
  border-top: 1px solid #2b4850;
  color: #92aba7;
  font-size: 0.8rem;
}
a.mail {
  color: #fff;
}
@media (max-width: 850px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .footer-bottom-content {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .footer-inner {
    padding-top: 60px;
    padding-bottom: 25px;
  }
  .footer-top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 18px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
  .footer-bottom-content {
    gap: 34px;
  }
  .copyright {
    flex-direction: column;
    gap: 5px;
  }
}
@media (max-width: 420px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-brand {
    grid-column: auto;
  }
  .feedback-submit {
    flex-direction: column;
  }
  .feedback-submit button {
    justify-content: center;
    min-height: 44px;
  }
}
</style>
