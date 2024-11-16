grandmas_response = {
    "empty_input": "WHAT?!",
    "lowercase_input": "SPEAK UP, KID!",
    "uppercase_input": "NO, NOT SINCE 1946!",
    "first_goodbye": "LEAVING SO SOON?",
    "second_goodbye": "LATER, SKATER!",
}


def deaf_grandma() -> None:
    goodbye_count = 0

    while True:
        user_input = input("Speak to grandma: \n")

        if not user_input:
            print(grandmas_response["empty_input"], "\n")
        elif user_input == "GOODBYE!":
            goodbye_count += 1
            if goodbye_count == 1:
                print(grandmas_response["first_goodbye"], "\n")
            elif goodbye_count == 2:
                print(grandmas_response["second_goodbye"], "\n")
                break
        elif any(char.islower() for char in user_input):
            print(grandmas_response["lowercase_input"], "\n")
        elif user_input.isupper():
            print(grandmas_response["uppercase_input"], "\n")

deaf_grandma()