'use client';

import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Input from '@/app/components/ui/Input/Input';
import Textarea from '@/app/components/ui/Textarea/Textarea';
import Button from '@/app/components/ui/Button/Button';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    fio: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.contact__inner}>
          <h2 className={`${styles.contact__title} title-h2`}>Contact</h2>

          <form className={styles.contact__form}>
            <div className={`${styles['contact__form-item']} flex flex-col`}>
              <label
                htmlFor="contactFormName"
                className={styles['contact__form-label']}
              >
                Enter your name:
              </label>
              <Input
                id="contactFormName"
                type="text"
                name="fio"
                placeholder="Name"
                value={formData.fio}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles['contact__form-item']} flex flex-col`}>
              <label
                htmlFor="contactFormEmail"
                className={styles['contact__form-label']}
              >
                Enter your email:
              </label>
              <Input
                id="contactFormEmail"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className={`${styles['contact__form-item']} flex flex-col`}>
              <label
                htmlFor="contactFormMessage"
                className={styles['contact__form-label']}
              >
                Enter a message:
              </label>
              <Textarea
                id="contactFormMessage"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button
              className={styles['contact__form-btn']}
              type={'submit'}
              variant="secondary"
            >
              Send
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.contact__bg}>
        <Image
          src="/images/mainPage/contact/contact_bg.png"
          fill={true}
          alt="Image"
          priority
          className="img-responsive"
        />
      </div>
    </section>
  );
}
