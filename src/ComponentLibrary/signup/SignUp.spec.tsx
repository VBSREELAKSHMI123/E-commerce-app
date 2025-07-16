// import { render, screen } from "@testing-library/react";
// import SignUpPage from "./SignUpPage";
// import React from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider, useDispatch } from "react-redux";
// import { store } from "../redux/store";

// const mockStore = configureStore([])
// const mockDispatch = jest.fn()

// jest.mock("react-redux", () => ({
//     ...jest.requireActual("reacr-redux"),
//     useDispatch:()=>mockDispatch
// }))

// describe("SignUp", () => {

//     let store: any
//     beforeEach(() => {
//         store = mockStore([]);
//         render(
//           <Provider store={store}>
//             <SignUpPage />
//           </Provider>
//         );
//     })

//     it('render image', () => {
//         const image = screen.getByAltText("signup") as HTMLImageElement;
//     })
// });



// // it("headings present or not", () => {
// //   render(
// //     <Provider store={store}>
// //       <SignUpPage />
// //     </Provider>
// //   );
// //   expect(screen.findByText("Create an account")).toBeInTheDocument();
// //   expect(screen.findByText("Enter your details below")).toBeInTheDocument();
// //   expect(screen.findByLabelText(/Name/i)).toBeInTheDocument();
// //   expect(screen.findByLabelText(/Email/i)).toBeInTheDocument();
// //   expect(screen.findByLabelText(/Password/i)).toBeInTheDocument();
// //   expect(
// //     screen.getByRole("button", { name: /CREATE ACCOUNT/i })
// //   ).toBeInTheDocument();
// //   expect(
// //     screen.getByRole("button", { name: /SIGNUP WITH GOOGLE/i })
// //   ).toBeInTheDocument();
// //   expect(screen.getByText("Already have account?Log in")).toBeInTheDocument();
// // });