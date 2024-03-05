interface NormalCustomer {
    type: 'Gold'|'Normal';
    normal: string;
}

interface GoldCustomer {
    type: 'Gold'|'Normal';
    gold: boolean;
}


// Eigener TypeGuard
function isGoldCustomer(customer: NormalCustomer | GoldCustomer)
: customer is GoldCustomer 
{
    return customer.type === 'Gold';
}


function isNumber(value: string | number): value is number {
    return !isNaN(value);
}
  
  function extendLicense(customer: NormalCustomer  | GoldCustomer)  {
      if (isGoldCustomer)   {

      } else {
          
      }
  }


  // Schzema validation für Typescript --> zad uns calibot (neu)
// https://github.com/colinhacks/zod


// VS Code Sprihngen durch die Fehler: F8