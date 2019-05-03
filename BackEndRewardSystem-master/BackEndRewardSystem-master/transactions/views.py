from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import Http404

from .forms import DepositForm

# Create your views here.


@login_required()
def deposit_view(request):
    if not request.user.is_authenticated:
        raise Http404
    else:
        title = "Deposit"
        form = DepositForm(request.POST or None)

        if form.is_valid():
            deposit = form.save(commit=False)
            deposit.user = request.user
            # adds users deposit to balance.
            deposit.user.balance += deposit.amount
            deposit.user.save()
            deposit.save()
            messages.success(request, 'You Have Deposited {} $.'
                             .format(deposit.amount))
            return redirect("home")

        context = {
                    "title": title,
                    "form": form
                  }
        return render(request, "transactions/form.html", context)