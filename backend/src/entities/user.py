# coding=utf-8

from marshmallow import Schema, fields
from sqlalchemy import Column, String

from .entity import Entity, Base


class User(Entity, Base):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True}


    username = Column(String)
    password = Column(String)

    def __init__(self, username, password, created_by):
        Entity.__init__(self, created_by)
        self.username = username
        self.password = password

class UserSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    description = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
