import { ResponseType } from "../../../constants";
import { UserDetails } from "../../../model/user.model";

export interface ForgotPasswordData {
    email: string | undefined;
}

export interface LoginDetails {
    username: string | undefined;
    password: string | undefined;
}

export interface SignUpDetails {
    password1: string | undefined;
    password2: string | undefined;
    email: string | undefined;
    username: string | undefined;
}

export interface UserModelReducer {
    userDetails: UserDetails;
    loginCompleted: ResponseType.FULFILLED | ResponseType.REJECTED | null;
    signUpCompleted: ResponseType.FULFILLED | ResponseType.REJECTED | null;
    verifyCompleted: ResponseType.FULFILLED | ResponseType.REJECTED | null;
    loginDetails: UserDetails;
    forgotPasswordCompleted: ResponseType.FULFILLED | ResponseType.REJECTED | null;
}