export default function ActionIcon({ name = "next", className = "" }) {
  const paths = {
    next: <path d="m9 5 7 7-7 7" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 15v5h14v-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  };

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      className={`inline-block size-4 shrink-0 align-middle ${className}`}>
      {paths[name] || paths.next}
    </svg>
  );
}
