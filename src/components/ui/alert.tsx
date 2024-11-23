// src/components/ui/alert.tsx
import React from "react";

export const Alert: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="alert">{children}</div>;

export const AlertTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="alert-title">{children}</h2>;

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="alert-description">{children}</p>;
