import { loginApi } from '../api/auth';
import { FormProvider, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

// TODO: Implement connection form with validation and storage in global state
export const LoginPage = () => {
  const handleSubmit = async (data: FormValues) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="card">
      <h2>Connexion</h2>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...form.register('email')}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              {...form.register('password')}
            />
          </div>

          <button type="submit" formNoValidate>
            Se connecter
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
