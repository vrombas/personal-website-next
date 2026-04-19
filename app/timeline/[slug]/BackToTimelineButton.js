'use client';

import { useRouter } from 'next/navigation';

export default function BackToTimelineButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push('/');
  };

  return (
    <button className="timeline-link timeline-back-button" type="button" onClick={handleBack}>
      Back
    </button>
  );
}
