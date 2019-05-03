from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, username, email, account_no, contact_no,
                      Address, nationality, occupation, balance, password=None):
        """
            Create and save a user with the given account_no and password.
        """
        user = self.model(username=username, email=self.normalize_email(email), account_no=account_no,contact_no=contact_no,
                          Address=Address, nationality=nationality,
                          occupation=occupation, balance=balance)

        user.set_password(password)
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        user = self.create_user(username=username, email=email, password=password, **extra_fields)
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    def get_by_natural_key(self, username_):
        print(username_)
        return self.get(username=username_)