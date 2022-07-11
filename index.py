from flask import Flask, render_template, session
from datetime import timedelta

web = Flask(__name__)
web.secret_key = "Death123"
web.permanent_session_lifetime = timedelta(days = 7)


@web.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    web.run(debug = True)