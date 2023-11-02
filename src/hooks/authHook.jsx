import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@RocketMovies:token", token);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setDataUser({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao logar usuário, tente novamente mais tarde");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@RocketMovies:user");
    localStorage.removeItem("@RocketMovies:token");

    setDataUser({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadFormData = new FormData();
        fileUploadFormData.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadFormData);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));

      setDataUser({ user, token: dataUser.token });

      alert("Perfil atualizado com sucesso");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao logar usuário, tente novamente mais tarde");
      }
    }
  }

  useEffect(() => {
    const storageUser = localStorage.getItem("@RocketMovies:user");
    const storageToken = localStorage.getItem("@RocketMovies:token");

    if (storageUser && storageToken) {
      api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;

      setDataUser({ user: JSON.parse(storageUser), token: storageToken });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: dataUser.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
