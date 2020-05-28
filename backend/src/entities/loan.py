# coding=utf-8

from marshmallow import Schema, fields
from sqlalchemy import Column, String

from .entity import Entity, Base


class Loan(Entity, Base):
    __tablename__ = 'loans'
    __table_args__ = {'extend_existing': True}

    Loan_ID = Column(String)
    Gender = Column(String)
    Married = Column(String)
    Dependents = Column(String)
    Education = Column(String)
    Self_Employed = Column(String)
    LoanAmount = Column(String)
    Credit_History = Column(String)
    ApplicantIncome = Column(String)
    CoapplicantIncome = Column(String)
    Loan_Amount_Term = Column(String)
    Property_Area = Column(String)
    Loan_Status = Column(String)
    

    def __init__(self, username, password, created_by):
        Entity.__init__(self, created_by)
        self.Loan_ID = Loan_ID
        self.Gender = Gender

        self.Married = Married
        self.Dependents = Dependents
        self.Education = Education
        self.Self_Employed = Self_Employed
        self.LoanAmount = LoanAmount
        self.Credit_History = Credit_History
        self.ApplicantIncome = ApplicantIncome
        self.CoapplicantIncome = CoapplicantIncome
        self.Loan_Amount_Term = Loan_Amount_Term
        self.Property_Area = Property_Area
        self.Loan_Status = Loan_Status

class LoanSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    description = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()






    
