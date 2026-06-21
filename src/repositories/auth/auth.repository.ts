import type { SignInDto } from "../../dtos/auth/signin.dto";
import type { SignUpDto } from "../../dtos/auth/signup.dto";
import HttpClient from "../../utils/HttpClient.util";

const apiUrl = import.meta.env.VITE_API_URL;

export class AuthRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/auth`);
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return await this.httpClient.post("/register", signUpDto);
  }

  async signIn(signInDto: SignInDto) {
    return await this.httpClient.post("/login", signInDto);
  }
}
