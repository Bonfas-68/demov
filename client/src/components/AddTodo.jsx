import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import './addtodo.css';
import { apiDomain } from "../utils/utils";
import { useContext } from "react";
import { Context } from "../todoRedux/userContext/Context";
import { addTodos } from "../todoRedux/apiCalls";
import { useDispatch } from "react-redux";

export default function AddTodo() {
    const dispatch = useDispatch();
    const { user } = useContext(Context)
    const schema = yup.object().shape({
        description: yup.string().required("description is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        try {
            addTodos({user,data}, dispatch)
        } catch (error) {
            alert(error.message)
        }
    };
    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <textarea
                    {...register("description")}
                    name="description"
                    id="description"
                ></textarea>
                <p>{errors.description?.message}</p>
                <input className="submitBtn" type="submit" value="save" />
            </form>
        </div>
    )
}
