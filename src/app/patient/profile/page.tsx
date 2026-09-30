import Link from "next/link";

export default function PatientProfilePage() {
  return (
    <main className="route-placeholder">
      <div className="route-placeholder-content">
        <div className="brand-lockup" aria-label="Re:Vive">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            Re<span>:Vive</span>
          </span>
        </div>
        <h1>Patient profile</h1>
        <p>Profile details are coming soon.</p>
        <Link className="back-link" href="/patient/dashboard">
          Return to dashboard
        </Link>
      </div>
    </main>
  );
}