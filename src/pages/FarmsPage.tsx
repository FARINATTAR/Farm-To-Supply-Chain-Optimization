import React, { useState } from 'react';
import { FormCard } from '../components/forms/FormCard';
import { InputField } from '../components/forms/InputField';
import { SelectField } from '../components/forms/SelectField';

const PRODUCE_TYPES = [
  { value: 'vegetables', label: 'Vegetables' },
  { value: 'fruits', label: 'Fruits' },
  { value: 'grains', label: 'Grains' },
  { value: 'dairy', label: 'Dairy' },
];

export function FarmsPage() {
  const [formData, setFormData] = useState({
    farmName: '',
    produceType: '',
    quantity: '',
    location: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Farm data submitted:', formData);
    // TODO: Add API integration
  };

  return (
    <FormCard title="Add Farm Details" onSubmit={handleSubmit}>
      <InputField
        label="Farm Name"
        type="text"
        name="farmName"
        value={formData.farmName}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Produce Type"
        name="produceType"
        value={formData.produceType}
        onChange={handleChange}
        options={PRODUCE_TYPES}
        required
      />
      <InputField
        label="Quantity (kg)"
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <InputField
        label="Location"
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Enter farm address"
        required
      />
    </FormCard>
  );
}