from bottle import route, run

@route('/')
def index():
    return 'Index, boom!'

@route('/hello')
def hello():
    return 'Hello World, with router "/hello"'

run(host='localhost', port=5050)

"""
StackOverFlow:
If you have problem with:
    "ImportError: No module named bottle"
use the command:
    $ sudo pip install bottle

Guide for example:
    https://bottlepy.org/docs/dev/bottle-docs.pdf

Docs Official:
    https://bottlepy.org/docs/dev/
"""
