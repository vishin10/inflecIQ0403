const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

interface ResumeData {
  fullName?: string;
  email?: string;
  position?: string;
  otherRole?: string;
  message?: string;
}

export async function uploadResume(file: File, data: ResumeData = {}) {
  const form = new FormData();
  form.append('resume', file);               
  form.append('fullName', data.fullName || '');
  form.append('email', data.email || '');
  form.append('position', data.position || '');
  form.append('otherRole', data.otherRole || '');
  form.append('message', data.message || '');

  const res = await fetch(`${API_BASE}/api/uploadResume`, {
    method: 'POST',
    body: form,
  });

  const text = await res.text();
  if (!res.ok) throw new Error(`Upload failed ${res.status}: ${text}`);
  try { return JSON.parse(text); } catch { return { ok: true, text }; }
}
