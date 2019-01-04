from flask import Blueprint
routes = Blueprint('routes', __name__)

from .users import *
from .events import *
from .session import *
from .groups import *
