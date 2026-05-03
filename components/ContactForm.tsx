"use client";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted");

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // Clear previous errors
    clearErrors();

    let valid = true;

    if (!name.trim()) {
      showError("name-error", "Name is required.");
      valid = false;
    }

    if (!email.trim() || !email.includes("@")) {
      showError("email-error", "Please enter a valid email.");
      valid = false;
    }

    if (!message.trim()) {
      showError("message-error", "Message cannot be empty.");
      valid = false;
    }

    if (valid) {
      const success = document.getElementById("success-message");
      if (success) success.style.display = "block";
      form.reset();
      console.log("Form is valid! Showing success.");
    }
  }

  function showError(id: string, message: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function clearErrors() {
    ["name-error", "email-error", "message-error"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
    const success = document.getElementById("success-message");
    if (success) success.style.display = "none";
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />
        <span id="name-error" role="alert" style={{color: "red", fontSize: "0.85rem"}}></span>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
        <span id="email-error" role="alert" style={{color: "red", fontSize: "0.85rem"}}></span>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message"></textarea>
        <span id="message-error" role="alert" style={{color: "red", fontSize: "0.85rem"}}></span>
      </div>
      <button type="submit">Send Message</button>
      <p id="success-message" style={{display: "none", color: "green", marginTop: "1rem"}}>
        ✅ Message sent successfully!
      </p>
    </form>
  );
}