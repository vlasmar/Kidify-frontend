import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
        axios
          .post(`http://localhost:4000/auth/signup`, data)
          .then((response) => {
            console.log(response.data);
            navigate("/");
          })
          .catch((err) => console.log(err));
  }

    return (
      <div className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("first_name", { required: true })} />
          {errors.firstName && <p>First name is required.</p>}
          <input type="text" {...register("last_name", { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <p>Email is required.</p>}
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <p>Username is required.</p>}
          <input type="password" {...register("password", { required: true, minLength: 6 })} />
          {errors.password && <p>Password is required.</p>}
          <input {...register("userImg")} />
          <input {...register("age", { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      </div>
    );
    }
export default Signup;
