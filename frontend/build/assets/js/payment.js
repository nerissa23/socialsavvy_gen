
function openConfirmationModal() {
  document.getElementById("confirmationModal").style.display = "block";
}
function closeConfirmationModal() {
  document.getElementById("confirmationModal").style.display = "none";
}

function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
}

//SUBMIT FORM//
function handleFormSubmission(event) {
  event.preventDefault();
  openConfirmationModal();
  document.getElementById("confirmSubmission").addEventListener("click", function() {
    closeConfirmationModal();
    document.getElementById("successModal").style.display = "block";
    document.getElementById("successModal").querySelector(".close").addEventListener("click", function() {
      closeSuccessModal();
    });
  });
}

document.getElementById("paymentForm").addEventListener("submit", handleFormSubmission);
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("upgradeSubscription").addEventListener("click", function() {

      var modal = document.getElementById("upgradeModal");
      var btn = document.getElementById("upgradeSubscription");
      btn.onclick = function () {
          modal.style.display = "block";
      };
      modal.querySelector(".close").addEventListener("click", function() {
          modal.style.display = "none";
      });
      function closeModal() {
          modal.style.display = "none";
      }
      window.onclick = function (event) {
          if (event.target == modal) {
              closeModal();
          }
      };
  });


  // CANCEL SUBS//
  document.getElementById("cancelSubscription").addEventListener("click", function() {
      var cancelModal = document.getElementById("cancelModal");
      var cancelBtn = document.getElementById("cancelSubscription");
      cancelBtn.onclick = function () {
          cancelModal.style.display = "block";
      };
      cancelModal.querySelector(".close").addEventListener("click", function() {
          cancelModal.style.display = "none";
      });
      function closeCancelModal() {
          cancelModal.style.display = "none";
      }
      window.onclick = function (event) {
          if (event.target == cancelModal) {
              closeCancelModal();
          }
      };
  });
});

 // VIEW RECEIPTS//
function openReceiptModal() {
  var modal = document.getElementById("receiptModal");
  modal.style.display = "block";
}

function closeReceiptModal() {
  var modal = document.getElementById("receiptModal");
  modal.style.display = "none";
}

var viewButtons = document.querySelectorAll(".viewButton");
viewButtons.forEach(function(button) {
  button.addEventListener("click", function() {
      openReceiptModal();
  });
});

//PLAN UPGRADE//
document.querySelector('.choosePlan').addEventListener('click', function() {
  document.querySelector('.plan-content').classList.toggle('show');
});

document.querySelectorAll('.plan-option').forEach(item => {
  item.addEventListener('click', function() {
      let selectedPlan = this.getAttribute('data-plan');
      document.getElementById('selectedPlan').innerText = selectedPlan;
      document.getElementById('confirmModal').style.display = 'block';
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('confirmModal').style.display = 'none';
});

document.getElementById('confirmChange').addEventListener('click', function() {
  document.getElementById('confirmModal').style.display = 'none';
});
