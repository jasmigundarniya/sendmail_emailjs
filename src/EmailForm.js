import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    from:'',
    to: '',
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
        "service_l1h3yom",
        "template_6smry5s",
        {
            from: emailData.from,
          from_name: emailData.to,
          from_email: emailData.subject,
          message: emailData.text,
          user_email: emailData.to,
        },
        "V1dRqUmO6RcsQVEdt"
      )
      .then(
        (result) => {
            alert('Mail sent sucessfully')
           if(result.status === 200) {
            setEmailData({
                from:'',
                to: '',
                subject: '',
                text: '',
              })
           }

          console.log("result.text :>> ", result);
        },
        (error) => {
          console.log("error.text :>> ", error.text);
        }
        );
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Send Email</h2>
        <div>
          <label>From:</label>
          <input type="email" name="from" value={emailData.from} onChange={handleChange} required />
        </div>
        <div>
          <label>To:</label>
          <input type="email" name="to" value={emailData.to} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={emailData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label>Text:</label>
          <textarea name="text" value={emailData.text} onChange={handleChange} required />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>

    {/* <div className="board-row">
    <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3ygjthdetuedue5d</button>
      </div> */}
    </>
  );
};

export default EmailForm;
