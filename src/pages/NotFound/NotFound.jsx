import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>Page not Found</h1>
      <Link to="/">
        <button
          type="button"
        >
          Go back
        </button>
      </Link>
    </section>
  );
}
