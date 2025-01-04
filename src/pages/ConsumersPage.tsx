import React, { useState } from 'react';
import { FormCard } from '../components/forms/FormCard';
import { InputField } from '../components/forms/InputField';

export function ConsumersPage() {
  const [formData, setFormData] = useState({
    consumerName: '',
    orderDetails: '',
    deliveryLocation: '',
    requiredQuantity: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consumer data submitted:', formData);
    // TODO: Add API integration
  };

  return (
    <FormCard title="Add Consumer Order" onSubmit={handleSubmit}>
      <InputField
        label="Consumer Name"
        type="text"
        name="consumerName"
        value={formData.consumerName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Order Details"
        type="textarea"
        name="orderDetails"
        value={formData.orderDetails}
        onChange={handleChange}
        placeholder="Enter order specifications"
        required
      />
      <InputField
        label="Delivery Location"
        type="text"
        name="deliveryLocation"
        value={formData.deliveryLocation}
        onChange={handleChange}
        placeholder="Enter delivery address"
        required
      />
      <InputField
        label="Required Quantity (kg)"
        type="number"
        name="requiredQuantity"
        value={formData.requiredQuantity}
        onChange={handleChange}
        required
      />
    </FormCard>
  );
}