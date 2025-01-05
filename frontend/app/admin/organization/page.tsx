'use client'
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';

const Organization = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');

  const addOrganization = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/organization`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to add organization');
      }

      const data = await response.json();
      alert('Organization added successfully');
      console.log(data);

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error(error);
      alert('Error adding organization');
    }
  };

  return (
    <div>
      <div>
        <h1>Add Organization</h1>
        <div className="flex gap-10">
          <Input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Phone"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button onClick={addOrganization}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default Organization;
