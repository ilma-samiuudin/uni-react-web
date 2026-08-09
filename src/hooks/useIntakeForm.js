import { useState } from 'react';

export function useIntakeForm() {
  const [formData, setFormData] = useState({ fullName: '', userEmail: '', cellPhone: '', targetTrack: 'bs-cs' });
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const updateField = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatchForm = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.userEmail && formData.cellPhone) {
      setSubmissionStatus(true);
      console.log("Secure Payload Buffered Successfully:", formData);
      setTimeout(() => setSubmissionStatus(false), 6000);
    }
  };

  return { formData, submissionStatus, updateField, dispatchForm };
}
