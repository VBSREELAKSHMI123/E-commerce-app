import React from "react";
import ContactUs from "./ContactUs";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("ContactUs", () => {
  it("should render the contact information section", () => {
    render(<ContactUs />);
    expect(screen.getByText("Call To Us")).toBeInTheDocument();
    expect(
      screen.getByText("We are available 24/7, 7 days a week.")
    ).toBeInTheDocument();
    expect(screen.getByText("Phone: +8801611112222")).toBeInTheDocument();

    expect(screen.getByText("Write To US")).toBeInTheDocument();
    expect(
      screen.getByText("Fill out our form and we will contact")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Emails: customer@exclusive.com")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Emails: support@exclusive.com")
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  });
});
