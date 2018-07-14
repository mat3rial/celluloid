interface DialogStateInterface {
  readonly kind: string;
  readonly title: string;
}

export class SignupOpen implements DialogStateInterface {
  readonly kind = 'Signup';
  readonly title = 'Inscription';
}

export class ConfirmSignupOpen implements DialogStateInterface {
  readonly kind = 'Confirm';
  readonly title = 'Confirmer son email';
}

export class LoginOpen implements DialogStateInterface {
  readonly kind = 'Login';
  readonly title = 'Connexion';
}

export class ResetPasswordOpen implements DialogStateInterface {
  readonly kind = 'RequestNewPassword';
  readonly title = 'Réinitialiser le mot de passe';
}

export class ConfirmResetPasswordOpen implements DialogStateInterface {
  readonly kind = 'ConfirmNewPassword';
  readonly title = 'Réinitialiser le mot de passe';
}

export class Closed implements DialogStateInterface {
  readonly kind = 'None';
  readonly title = '';
}

export type DialogState
  = SignupOpen
  | ConfirmSignupOpen
  | LoginOpen
  | ResetPasswordOpen
  | ConfirmResetPasswordOpen
  | Closed;