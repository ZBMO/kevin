import streamsync as ss
print("Hello kevin!")

def click_handler(payload):
    print("click payload")
    print(payload)

def change_handler(state, payload):
    print("select payload")
    print(payload)


initial_state = ss.init_state({
    "my_app": {
        "title": "My App"
    },
})
