import * as React from 'react';


export const EmailTemplate = ({
  name,
  email,
  message,
  form
}) => (
  <div>
    <h1>New Message</h1>
    <h3>{form}</h3>
    <h3>Name</h3>
    <span>{name}</span>
    <h3>Email</h3>
    <span>{email}</span>
    <h3>Message</h3>
    <span>{message}</span>
  </div>
);
