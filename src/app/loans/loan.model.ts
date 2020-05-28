export class Loan {
  constructor(
    public Loan_ID: string,
    public Gender: string,
    public Married: number,
    public Dependents: Date,
    public Education: Date,
    public Self_Employed: string,
    public LoanAmount: string,
    public Credit_History: string,
    public ApplicantIncome: string,
    public CoapplicantIncome: string,
    public Loan_Amount_Term: string,
    public Property_Area: string,
    public Loan_Status: string,
  ) { }
}
