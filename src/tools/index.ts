import { JWTDecoder } from "./jwt-decoder";
import { LoremIpsumGenerator } from "./lorem-ipsum-generator";
import { PasswordGenerator } from "./password-generator";

const tools = {
  "password-generator": PasswordGenerator,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "jwt-decoder": JWTDecoder,
};

export default tools;
