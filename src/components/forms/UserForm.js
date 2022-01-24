import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="bookForm">
            <h3>Ajouter un nouvel utilisateur</h3>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>
                        <label htmlFor="name">Nom</label>
                        <input {...register('name')} type="text" id='name' />
                    </span>
                    <span>
                        <label htmlFor='firstname'>Prénom</label>
                        <input {...register('firstname')} id="firstname" type="text" />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="adress">Adresse</label>
                        <input {...register('adress')} type="text" id="adress" />
                    </span>
                    <span>
                        <label htmlFor='post_code'>Code postal</label>
                        <input {...register('post_code')} type="text" id="post_code" />
                    </span>

                </div>
                <div>
                    <span>
                        <label htmlFor="city">Ville</label>
                        <input {...register('city')} type="text" id="city" />
                    </span>
                    <span>
                        <label htmlFor="role">Role</label>
                        <select id="role" {...register('role')}>
                            <option value="ROLE_USER">Étudiant</option>
                            <option value="ROLE_PROF">Professeur</option>
                        </select>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="phone">Téléphone</label>
                        <input {...register('phone')} type="text" id="phone" />
                    </span>
                    <span>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="text" id='email' />
                    </span>
                </div>

                <button type="submit" >Ajouter</button>
            </form>
        </div>
    );
};

export default UserForm;