document.addEventListener("DOMContentLoaded", () => {
      const moodSelect = document.getElementById("moodSelect");
      const surpriseBtn = document.getElementById("surpriseBtn");
      const resultSection = document.getElementById("resultSection");
      const moodName = document.getElementById("moodName");
      const quoteText = document.getElementById("quoteText");
      const songText = document.getElementById("songText");
      const movieText = document.getElementById("movieText");
      const favBtn = document.getElementById("favBtn");

      const suggestions = {
            joy: [
                  {
                        quote: "Happiness is a direction, not a place.",
                        song: "Happy - Pharrell Williams",
                        movie: "Amélie"
                  },
                  {
                        quote: "Joy is not in things; it is in us.",
                        song: "Walking on Sunshine - Katrina & The Waves",
                        movie: "Inside Out"
                  },
                  {
                        quote: "The purpose of our lives is to be happy.",
                        song: "Good as Hell - Lizzo",
                        movie: "Paddington 2"
                  }
            ],
            sadness: [
                  {
                        quote: "Tears come from the heart and not from the brain.",
                        song: "Someone Like You - Adele",
                        movie: "The Pursuit of Happyness"
                  },
                  {
                        quote: "Sadness flies away on the wings of time.",
                        song: "Fix You - Coldplay",
                        movie: "Blue Valentine"
                  },
                  {
                        quote: "Every human walks around with a certain kind of sadness.",
                        song: "Let Her Go - Passenger",
                        movie: "A Silent Voice"
                  }
            ],
            fear: [
                  {
                        quote: "Do one thing every day that scares you.",
                        song: "Creep - Radiohead",
                        movie: "A Quiet Place"
                  },
                  {
                        quote: "Fear is only as deep as the mind allows.",
                        song: "Bury a Friend - Billie Eilish",
                        movie: "The Babadook"
                  },
                  {
                        quote: "Inaction breeds doubt and fear.",
                        song: "Thriller - Michael Jackson",
                        movie: "Get Out"
                  }
            ],
            disgust: [
                  {
                        quote: "Disgust is often rooted in misunderstanding.",
                        song: "Bad Guy - Billie Eilish",
                        movie: "Parasite"
                  },
                  {
                        quote: "Sometimes we must confront what repels us.",
                        song: "Black Skinhead - Kanye West",
                        movie: "Joker"
                  },
                  {
                        quote: "Growth is moving beyond disgust.",
                        song: "DNA - Kendrick Lamar",
                        movie: "Requiem for a Dream"
                  }
            ],
            anger: [
                  {
                        quote: "Speak when you are angry and you will make the best speech you’ll ever regret.",
                        song: "Lose Yourself - Eminem",
                        movie: "Whiplash"
                  },
                  {
                        quote: "Anger is one letter short of danger.",
                        song: "Breaking the Habit - Linkin Park",
                        movie: "Falling Down"
                  },
                  {
                        quote: "For every minute you remain angry, you give up sixty seconds of peace.",
                        song: "Numb - Linkin Park",
                        movie: "The Revenant"
                  }
            ],
            surprise: [
                  {
                        quote: "Believe you can and you're halfway there.",
                        song: "Shake It Off - Taylor Swift",
                        movie: "The Secret Life of Walter Mitty"
                  },
                  {
                        quote: "Push yourself, because no one else is going to do it for you.",
                        song: "You Belong With Me - Taylor Swift",
                        movie: "La La Land"
                  },
                  {
                        quote: "Don’t watch the clock; do what it does. Keep going.",
                        song: "Style - Taylor Swift",
                        movie: "Legally Blonde"
                  }
            ]
      };

      function showSuggestion(mood) {
            const moodSet = suggestions[mood];
            const randomSet = moodSet[Math.floor(Math.random() * moodSet.length)];

            moodName.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
            quoteText.textContent = randomSet.quote;
            songText.textContent = randomSet.song;
            movieText.textContent = randomSet.movie;

            resultSection.classList.remove("d-none");
      }

      moodSelect.addEventListener("change", () => {
            const mood = moodSelect.value;
            showSuggestion(mood);
      });

      surpriseBtn.addEventListener("click", () => {
            showSuggestion("surprise");
      });

      favBtn.addEventListener("click", () => {
            alert("Mood added to favourites!");
            // Optional: store in localStorage or backend
      });
});
