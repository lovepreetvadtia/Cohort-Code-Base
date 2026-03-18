import { useContext } from "react";
import { AuthContext } from "../auth.context";

import { login,register,get } from "../services/auth.api";

const context = useContext(AuthContext)

