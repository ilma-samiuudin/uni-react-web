import { useEffect, useState } from 'react';

export function useIntakeForm() {
  const [formData, setFormData] = useState({ fullName: '', userEmail: '', cellPhone: '', targetTrack: 'bs-cs' });
  const [submissionStatus, setSubmissionStatus] = useState(false);

  useEffect(() => {
    if (!submissionStatus) return undefined;

    const timeoutId = setTimeout(() => setSubmissionStatus(false), 6000);
    return () => clearTimeout(timeoutId);
  }, [submissionStatus]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const dispatchForm = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.userEmail.trim() || !formData.cellPhone.trim()) return;

    setSubmissionStatus(true);
  };

  return { formData, submissionStatus, updateField, dispatchForm };
}
