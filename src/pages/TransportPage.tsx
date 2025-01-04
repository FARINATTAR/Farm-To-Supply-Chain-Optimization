import React, { useState } from 'react';
import { FormCard } from '../components/forms/FormCard';
import { InputField } from '../components/forms/InputField';
import { SelectField } from '../components/forms/SelectField';

const VEHICLE_TYPES = [
  { value: 'truck', label: 'Truck' },
  { value: 'van', label: 'Van' },
  { value: 'refrigerated', label: 'Refrigerated Truck' },
];

export function TransportPage() {
  const [formData, setFormData] = useState({
    vehicleName: '',
    vehicleType: '',
    capacity: '',
    costPerKm: '',
    availableRoutes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Transport data submitted:', formData);
    // TODO: Add API integration
  };

  return (
    <FormCard title="Add Transport Details" onSubmit={handleSubmit}>
      <InputField
        label="Vehicle Name"
        type="text"
        name="vehicleName"
        value={formData.vehicleName}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Vehicle Type"
        name="vehicleType"
        value={formData.vehicleType}
        onChange={handleChange}
        options={VEHICLE_TYPES}
        required
      />
      <InputField
        label="Capacity (kg)"
        type="number"
        name="capacity"
        value={formData.capacity}
        onChange={handleChange}
        required
      />
      <InputField
        label="Cost per Kilometer ($)"
        type="number"
        name="costPerKm"
        value={formData.costPerKm}
        onChange={handleChange}
        required
      />
      <InputField
        label="Available Routes"
        type="textarea"
        name="availableRoutes"
        value={formData.availableRoutes}
        onChange={handleChange}
        placeholder="Enter route details (one per line)"
        required
      />
    </FormCard>
  );
}