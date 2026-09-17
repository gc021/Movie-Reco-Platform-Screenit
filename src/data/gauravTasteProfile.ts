export interface GauravRatingEntry {
  title: string;
  year: number;
  rating: number; // 1 to 10
  directors: string;
  genres: string;
  type: 'Movie' | 'TV Series' | 'TV Episode' | 'TV Mini Series' | 'Short' | 'TV Movie' | 'Video';
}

// Complete database of Gaurav's IMDb ratings from the provided CSV
export const GAURAV_IMDB_RATINGS: GauravRatingEntry[] = [
  { title: "Ikka", year: 2026, rating: 5, directors: "Siddharth P Malhotra", genres: "Drama, Thriller, Crime", type: "Movie" },
  { title: "The Gorge", year: 2025, rating: 7, directors: "Scott Derrickson", genres: "Action, Romance, Sci-Fi, Adventure, Horror", type: "Movie" },
  { title: "Asteroid City", year: 2023, rating: 7, directors: "Wes Anderson", genres: "Comedy, Romance, Drama, Sci-Fi", type: "Movie" },
  { title: "The Odyssey", year: 2026, rating: 9, directors: "Christopher Nolan", genres: "Adventure, Fantasy, Action", type: "Movie" },
  { title: "Three Billboards Outside Ebbing, Missouri", year: 2017, rating: 8, directors: "Martin McDonagh", genres: "Crime, Drama, Comedy", type: "Movie" },
  { title: "Hamilton", year: 2020, rating: 8, directors: "Thomas Kail", genres: "Musical, Drama, Biography, History", type: "Movie" },
  { title: "Attack on Titan: The Last Attack", year: 2024, rating: 8, directors: "Ryota Aikei,Yūichirō Hayashi", genres: "Animation, Action, Drama, Adventure, Horror", type: "Movie" },
  { title: "Kill Bill: Vol. 2", year: 2004, rating: 9, directors: "Quentin Tarantino", genres: "Thriller, Crime, Action", type: "Movie" },
  { title: "Kill Bill: The Whole Bloody Affair", year: 2004, rating: 9, directors: "Quentin Tarantino", genres: "Action, Crime, Thriller", type: "Movie" },
  { title: "Obsession", year: 2025, rating: 7, directors: "Curry Barker", genres: "Horror, Thriller, Romance", type: "Movie" },
  { title: "Rahu Ketu", year: 2026, rating: 5, directors: "Vipul Vig", genres: "Fantasy, Comedy, Mystery, Romance", type: "Movie" },
  { title: "Pritam Pedro", year: 2026, rating: 7, directors: "", genres: "Comedy, Drama, Crime, Mystery, Thriller", type: "TV Series" },
  { title: "Bhooth Bangla", year: 2026, rating: 6, directors: "Priyadarshan", genres: "Comedy, Horror, Fantasy", type: "Movie" },
  { title: "Voicemails for Isabelle", year: 2026, rating: 6, directors: "Leah McKendrick", genres: "Comedy, Romance, Drama", type: "Movie" },
  { title: "Marty Supreme", year: 2025, rating: 3, directors: "Josh Safdie", genres: "Drama, Sport, Comedy", type: "Movie" },
  { title: "Your Friends & Neighbors", year: 2025, rating: 8, directors: "", genres: "Drama, Crime", type: "TV Series" },
  { title: "Scream 7", year: 2026, rating: 4, directors: "Kevin Williamson", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Project Hail Mary", year: 2026, rating: 9, directors: "Phil Lord,Christopher Miller", genres: "Sci-Fi, Adventure, Comedy, Drama", type: "Movie" },
  { title: "The Sheep Detectives", year: 2026, rating: 8, directors: "Kyle Balda", genres: "Comedy, Mystery, Family", type: "Movie" },
  { title: "The Devil Wears Prada", year: 2006, rating: 7, directors: "David Frankel", genres: "Drama, Comedy", type: "Movie" },
  { title: "One Battle After Another", year: 2025, rating: 7, directors: "Paul Thomas Anderson", genres: "Crime, Thriller", type: "Movie" },
  { title: "Bugonia", year: 2025, rating: 6, directors: "Yorgos Lanthimos", genres: "Sci-Fi, Comedy, Crime, Thriller", type: "Movie" },
  { title: "Dhurandhar: The Revenge", year: 2026, rating: 4, directors: "Aditya Dhar", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Karan Arjun", year: 1995, rating: 7, directors: "Rakesh Roshan", genres: "Romance, Drama, Fantasy, Action", type: "Movie" },
  { title: "Sarabhai V/S Sarabhai", year: 2004, rating: 9, directors: "", genres: "Comedy", type: "TV Series" },
  { title: "How to Get Away with Murder", year: 2014, rating: 9, directors: "", genres: "Crime, Drama, Mystery, Thriller", type: "TV Series" },
  { title: "Free Guy", year: 2021, rating: 7, directors: "Shawn Levy", genres: "Action, Comedy, Sci-Fi, Adventure, Fantasy, Romance", type: "Movie" },
  { title: "Ratatouille", year: 2007, rating: 9, directors: "Brad Bird,Jan Pinkava", genres: "Animation, Comedy, Family, Fantasy, Adventure", type: "Movie" },
  { title: "Reservoir Dogs", year: 1992, rating: 9, directors: "Quentin Tarantino", genres: "Crime, Thriller", type: "Movie" },
  { title: "Heat", year: 1995, rating: 8, directors: "Michael Mann", genres: "Drama, Action, Crime", type: "Movie" },
  { title: "Coco", year: 2017, rating: 9, directors: "Lee Unkrich,Adrian Molina", genres: "Animation, Family, Adventure, Fantasy, Mystery, Music, Drama", type: "Movie" },
  { title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: 9, directors: "Joaquim Dos Santos,Kemp Powers,Justin K. Thompson", genres: "Animation, Action, Adventure, Sci-Fi, Fantasy, Family", type: "Movie" },
  { title: "Rear Window", year: 1954, rating: 9, directors: "Alfred Hitchcock", genres: "Drama, Mystery, Thriller", type: "Movie" },
  { title: "Alien", year: 1979, rating: 8, directors: "Ridley Scott", genres: "Horror, Sci-Fi", type: "Movie" },
  { title: "Dunkirk", year: 2017, rating: 7, directors: "Christopher Nolan", genres: "War, Drama, Action, History, Thriller", type: "Movie" },
  { title: "The Social Network", year: 2010, rating: 9, directors: "David Fincher", genres: "Drama, Biography", type: "Movie" },
  { title: "Sinners", year: 2025, rating: 6, directors: "Ryan Coogler", genres: "Horror", type: "Movie" },
  { title: "The Bank Job", year: 2008, rating: 7, directors: "Roger Donaldson", genres: "Thriller, Crime", type: "Movie" },
  { title: "Zero Dark Thirty", year: 2012, rating: 8, directors: "Kathryn Bigelow", genres: "Thriller, Drama, History", type: "Movie" },
  { title: "Scream VI", year: 2023, rating: 6, directors: "Matt Bettinelli-Olpin,Tyler Gillett", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Scream", year: 1996, rating: 7, directors: "Wes Craven", genres: "Mystery, Horror", type: "Movie" },
  { title: "Nocturnal Animals", year: 2016, rating: 7, directors: "Tom Ford", genres: "Drama, Thriller", type: "Movie" },
  { title: "Dhurandhar", year: 2025, rating: 8, directors: "Aditya Dhar", genres: "Action, Crime, Thriller", type: "Movie" },
  { title: "Anora", year: 2024, rating: 7, directors: "Sean Baker", genres: "Drama, Comedy, Romance", type: "Movie" },
  { title: "Everything Everywhere All at Once", year: 2022, rating: 9, directors: "Daniel Kwan,Daniel Scheinert", genres: "Sci-Fi, Adventure, Comedy, Fantasy, Action, Drama", type: "Movie" },
  { title: "Glass Onion", year: 2022, rating: 7, directors: "Rian Johnson", genres: "Crime, Thriller, Drama, Mystery, Comedy", type: "Movie" },
  { title: "Knives Out", year: 2019, rating: 8, directors: "Rian Johnson", genres: "Crime, Mystery, Thriller, Drama, Comedy", type: "Movie" },
  { title: "The Studio", year: 2025, rating: 8, directors: "", genres: "Comedy, Drama", type: "TV Series" },
  { title: "The Office", year: 2005, rating: 9, directors: "", genres: "Comedy", type: "TV Series" },
  { title: "Ted Lasso", year: 2020, rating: 9, directors: "", genres: "Comedy, Drama, Sport", type: "TV Series" },
  { title: "Severance", year: 2022, rating: 10, directors: "", genres: "Drama, Thriller, Mystery, Sci-Fi", type: "TV Series" },
  { title: "His & Hers", year: 2026, rating: 6, directors: "", genres: "Thriller, Crime, Drama, Mystery", type: "TV Mini Series" },
  { title: "Saiyaara", year: 2025, rating: 5, directors: "Mohit Suri", genres: "Musical, Romance, Drama", type: "Movie" },
  { title: "Race", year: 2008, rating: 7, directors: "Abbas-Mustan", genres: "Thriller, Crime, Drama, Action, Mystery", type: "Movie" },
  { title: "Murder 2", year: 2011, rating: 9, directors: "Mohit Suri", genres: "Action, Drama, Horror, Crime, Thriller", type: "Movie" },
  { title: "Jannat: In Search of Heaven...", year: 2008, rating: 8, directors: "Kunal Deshmukh", genres: "Drama, Romance, Crime", type: "Movie" },
  { title: "Awarapan", year: 2007, rating: 8, directors: "Mohit Suri", genres: "Drama, Action, Romance, Crime, Thriller", type: "Movie" },
  { title: "Raaz: The Mystery Continues", year: 2009, rating: 7, directors: "Mohit Suri", genres: "Thriller, Horror, Mystery", type: "Movie" },
  { title: "Raaz", year: 2002, rating: 7, directors: "Vikram Bhatt", genres: "Musical, Mystery, Horror, Drama, Romance, Thriller", type: "Movie" },
  { title: "1920", year: 2008, rating: 7, directors: "Vikram Bhatt", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Shaapit: The Cursed", year: 2010, rating: 6, directors: "Vikram Bhatt", genres: "Horror, Romance, Thriller, Adventure", type: "Movie" },
  { title: "Darna Zaroori Hai", year: 2005, rating: 8, directors: "Ram Gopal Varma, Prawaal Raman", genres: "Horror, Comedy, Drama", type: "Movie" },
  { title: "Darna Mana Hai", year: 2003, rating: 7, directors: "Prawaal Raman", genres: "Horror, Comedy, Drama, Thriller", type: "Movie" },
  { title: "Smile", year: 2022, rating: 6, directors: "Parker Finn", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Smile 2", year: 2024, rating: 4, directors: "Parker Finn", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Nosferatu", year: 2024, rating: 6, directors: "Robert Eggers", genres: "Horror, Fantasy, Mystery", type: "Movie" },
  { title: "Final Destination: Bloodlines", year: 2025, rating: 7, directors: "Zach Lipovsky,Adam B. Stein", genres: "Horror, Thriller", type: "Movie" },
  { title: "Jurassic World: Rebirth", year: 2025, rating: 6, directors: "Gareth Edwards", genres: "Thriller, Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Ballerina", year: 2025, rating: 8, directors: "Len Wiseman", genres: "Action, Thriller, Adventure, Crime, Drama", type: "Movie" },
  { title: "The Naked Gun", year: 2025, rating: 8, directors: "Akiva Schaffer", genres: "Comedy, Action, Crime", type: "Movie" },
  { title: "Black Bag", year: 2025, rating: 7, directors: "Steven Soderbergh", genres: "Thriller, Drama, Romance, Mystery", type: "Movie" },
  { title: "Mickey 17", year: 2025, rating: 7, directors: "Bong Joon Ho", genres: "Sci-Fi, Adventure, Fantasy, Comedy", type: "Movie" },
  { title: "Superman", year: 2025, rating: 7, directors: "James Gunn", genres: "Adventure, Sci-Fi, Action", type: "Movie" },
  { title: "Ant-Man and the Wasp", year: 2018, rating: 6, directors: "Peyton Reed", genres: "Action, Adventure, Sci-Fi, Comedy", type: "Movie" },
  { title: "Ant-Man and the Wasp: Quantumania", year: 2023, rating: 5, directors: "Peyton Reed", genres: "Action, Adventure, Comedy, Sci-Fi", type: "Movie" },
  { title: "Ant-Man", year: 2015, rating: 8, directors: "Peyton Reed", genres: "Action, Sci-Fi, Comedy", type: "Movie" },
  { title: "Guardians of the Galaxy Vol. 3", year: 2023, rating: 8, directors: "James Gunn", genres: "Action, Adventure, Sci-Fi, Comedy, Fantasy", type: "Movie" },
  { title: "Spider-Man: No Way Home", year: 2021, rating: 8, directors: "Jon Watts", genres: "Action, Adventure, Sci-Fi, Fantasy", type: "Movie" },
  { title: "Oppenheimer", year: 2023, rating: 8, directors: "Christopher Nolan", genres: "Biography, Drama, History", type: "Movie" },
  { title: "Avatar: Fire and Ash", year: 2025, rating: 8, directors: "James Cameron", genres: "Fantasy, Sci-Fi, Action, Adventure, Drama", type: "Movie" },
  { title: "Avatar: The Way of Water", year: 2022, rating: 7, directors: "James Cameron", genres: "Action, Adventure, Sci-Fi, Fantasy", type: "Movie" },
  { title: "The Fantastic Four: First Steps", year: 2025, rating: 6, directors: "Matt Shakman", genres: "Adventure, Action, Sci-Fi", type: "Movie" },
  { title: "Thunderbolts*", year: 2025, rating: 6, directors: "Jake Schreier", genres: "Action, Adventure, Sci-Fi, Crime, Drama, Fantasy", type: "Movie" },
  { title: "Weapons", year: 2025, rating: 7, directors: "Zach Cregger", genres: "Horror, Mystery", type: "Movie" },
  { title: "How to Train Your Dragon", year: 2025, rating: 8, directors: "Dean DeBlois", genres: "Adventure, Action, Family, Fantasy, Comedy, Drama", type: "Movie" },
  { title: "K-Pop Demon Hunters", year: 2025, rating: 8, directors: "Chris Appelhans,Maggie Kang", genres: "Animation, Musical, Action, Adventure, Fantasy, Music, Comedy, Family", type: "Movie" },
  { title: "F1: The Movie", year: 2025, rating: 9, directors: "Joseph Kosinski", genres: "Sport, Drama", type: "Movie" },
  { title: "Pluribus", year: 2025, rating: 9, directors: "", genres: "Drama, Sci-Fi", type: "TV Series" },
  { title: "Wake Up Dead Man", year: 2025, rating: 8, directors: "Rian Johnson", genres: "Thriller, Comedy, Crime, Drama, Mystery", type: "Movie" },
  { title: "28 Days Later", year: 2002, rating: 8, directors: "Danny Boyle", genres: "Sci-Fi, Thriller, Drama, Horror", type: "Movie" },
  { title: "The Thursday Murder Club", year: 2025, rating: 7, directors: "Chris Columbus", genres: "Mystery, Comedy, Crime, Thriller", type: "Movie" },
  { title: "Interview with the Vampire", year: 1994, rating: 8, directors: "Neil Jordan", genres: "Horror, Drama, Fantasy", type: "Movie" },
  { title: "Collateral", year: 2004, rating: 7, directors: "Michael Mann", genres: "Crime, Thriller, Action, Drama", type: "Movie" },
  { title: "American Made", year: 2017, rating: 8, directors: "Doug Liman", genres: "Crime, Action, Comedy, Drama, Thriller", type: "Movie" },
  { title: "A Fish Called Wanda", year: 1988, rating: 9, directors: "Charles Crichton,John Cleese", genres: "Crime, Comedy", type: "Movie" },
  { title: "Metropolis", year: 1927, rating: 9, directors: "Fritz Lang", genres: "Drama, Sci-Fi", type: "Movie" },
  { title: "Casino", year: 1995, rating: 9, directors: "Martin Scorsese", genres: "Crime, Drama", type: "Movie" },
  { title: "Jaws", year: 1975, rating: 7, directors: "Steven Spielberg", genres: "Adventure, Horror, Drama, Thriller", type: "Movie" },
  { title: "Kill Bill: Vol. 1", year: 2003, rating: 10, directors: "Quentin Tarantino", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Breaking Bad", year: 2008, rating: 10, directors: "", genres: "Drama, Crime, Thriller", type: "TV Series" },
  { title: "Red Notice", year: 2021, rating: 6, directors: "Rawson Marshall Thurber", genres: "Action, Comedy, Thriller", type: "Movie" },
  { title: "Jumanji: The Next Level", year: 2019, rating: 6, directors: "Jake Kasdan", genres: "Action, Adventure, Comedy, Fantasy", type: "Movie" },
  { title: "Jumanji: Welcome to the Jungle", year: 2017, rating: 7, directors: "Jake Kasdan", genres: "Adventure, Fantasy, Action, Comedy", type: "Movie" },
  { title: "Ready Player One", year: 2018, rating: 9, directors: "Steven Spielberg", genres: "Sci-Fi, Action, Adventure", type: "Movie" },
  { title: "Baby Driver", year: 2017, rating: 8, directors: "Edgar Wright", genres: "Action, Music, Crime, Drama, Romance, Thriller", type: "Movie" },
  { title: "Bullet Train", year: 2022, rating: 8, directors: "David Leitch", genres: "Action, Thriller, Comedy", type: "Movie" },
  { title: "Deadpool 2", year: 2018, rating: 7, directors: "David Leitch", genres: "Action, Adventure, Comedy, Sci-Fi", type: "Movie" },
  { title: "Deadpool & Wolverine", year: 2024, rating: 8, directors: "Shawn Levy", genres: "Action, Comedy, Sci-Fi, Adventure", type: "Movie" },
  { title: "Inside Out 2", year: 2024, rating: 8, directors: "Kelsey Mann", genres: "Animation, Adventure, Comedy, Drama, Family, Fantasy, Sport", type: "Movie" },
  { title: "Top Gun: Maverick", year: 2022, rating: 9, directors: "Joseph Kosinski", genres: "Action, Drama", type: "Movie" },
  { title: "Hanu Man", year: 2024, rating: 9, directors: "Prasanth Varma", genres: "Action, Adventure, Fantasy", type: "Movie" },
  { title: "12th Fail", year: 2023, rating: 7, directors: "Vidhu Vinod Chopra", genres: "Drama, Biography", type: "Movie" },
  { title: "Crew", year: 2024, rating: 4, directors: "Rajesh A Krishnan", genres: "Comedy, Drama", type: "Movie" },
  { title: "X-Men '97", year: 2024, rating: 9, directors: "", genres: "Animation, Action, Adventure, Sci-Fi, Drama", type: "TV Series" },
  { title: "The Constant Gardener", year: 2005, rating: 6, directors: "Fernando Meirelles", genres: "Drama, Thriller, Mystery, Romance", type: "Movie" },
  { title: "Synecdoche, New York", year: 2008, rating: 8, directors: "Charlie Kaufman", genres: "Drama", type: "Movie" },
  { title: "The Fall of the House of Usher", year: 2023, rating: 9, directors: "", genres: "Drama, Horror, Mystery", type: "TV Mini Series" },
  { title: "Succession", year: 2018, rating: 10, directors: "", genres: "Drama, Comedy", type: "TV Series" },
  { title: "The Gentlemen", year: 2024, rating: 8, directors: "", genres: "Action, Comedy, Crime, Drama", type: "TV Series" },
  { title: "Fallout", year: 2024, rating: 9, directors: "", genres: "Action, Adventure, Drama, Sci-Fi", type: "TV Series" },
  { title: "3 Body Problem", year: 2024, rating: 8, directors: "", genres: "Sci-Fi, Adventure, Drama, Fantasy, Mystery", type: "TV Series" },
  { title: "Dune: Part Two", year: 2024, rating: 7, directors: "Denis Villeneuve", genres: "Adventure, Drama, Sci-Fi, Action", type: "Movie" },
  { title: "Furiosa: A Mad Max Saga", year: 2024, rating: 7, directors: "George Miller", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Vanilla Sky", year: 2001, rating: 8, directors: "Cameron Crowe", genres: "Mystery, Fantasy, Sci-Fi, Romance, Thriller", type: "Movie" },
  { title: "Hidimbha", year: 2023, rating: 8, directors: "Aneel Kanneganti", genres: "Action, Drama", type: "Movie" },
  { title: "Amsterdam", year: 2022, rating: 7, directors: "David O. Russell", genres: "Drama, History, Comedy, Mystery, Thriller, Romance", type: "Movie" },
  { title: "Terminator Salvation", year: 2009, rating: 5, directors: "McG", genres: "Sci-Fi, Action, Adventure", type: "Movie" },
  { title: "Air", year: 2023, rating: 8, directors: "Ben Affleck", genres: "Drama, Sport", type: "Movie" },
  { title: "Licorice Pizza", year: 2021, rating: 7, directors: "Paul Thomas Anderson", genres: "Drama, Comedy, Romance", type: "Movie" },
  { title: "Django Unchained", year: 2012, rating: 8, directors: "Quentin Tarantino", genres: "Western, Drama", type: "Movie" },
  { title: "12 Angry Men", year: 1957, rating: 9, directors: "Sidney Lumet", genres: "Crime, Drama", type: "Movie" },
  { title: "Meet Joe Black", year: 1998, rating: 7, directors: "Martin Brest", genres: "Drama, Romance, Fantasy", type: "Movie" },
  { title: "Farzi", year: 2023, rating: 8, directors: "", genres: "Crime, Thriller, Drama, Comedy", type: "TV Series" },
  { title: "Drishyam 2", year: 2022, rating: 8, directors: "Abhishek Pathak", genres: "Crime, Drama, Mystery, Thriller", type: "Movie" },
  { title: "Monica, O My Darling", year: 2022, rating: 8, directors: "Vasan Bala", genres: "Drama, Comedy, Crime, Thriller", type: "Movie" },
  { title: "Gaslight", year: 2023, rating: 7, directors: "Pavan Kirpalani", genres: "Thriller, Crime, Mystery, Horror", type: "Movie" },
  { title: "Hustle", year: 2022, rating: 7, directors: "Jeremiah Zagar", genres: "Sport, Comedy, Drama", type: "Movie" },
  { title: "Supernatural", year: 2005, rating: 9, directors: "", genres: "Drama, Horror, Mystery, Thriller, Fantasy", type: "TV Series" },
  { title: "RRR", year: 2022, rating: 9, directors: "S.S. Rajamouli", genres: "Action, Drama, Adventure", type: "Movie" },
  { title: "Bhool Bhulaiyaa 2", year: 2022, rating: 2, directors: "Anees Bazmee", genres: "Comedy, Horror", type: "Movie" },
  { title: "Dark Waters", year: 2019, rating: 7, directors: "Todd Haynes", genres: "Drama, Biography, History, Thriller", type: "Movie" },
  { title: "Love, Death & Robots", year: 2019, rating: 10, directors: "David Fincher, Tim Miller", genres: "Animation, Short, Comedy, Fantasy, Horror, Sci-Fi, Action, Adventure, Drama, Mystery, Thriller", type: "TV Series" },
  { title: "The Batman", year: 2022, rating: 9, directors: "Matt Reeves", genres: "Crime, Mystery, Action, Drama", type: "Movie" },
  { title: "Arrow", year: 2012, rating: 8, directors: "", genres: "Action, Drama, Mystery, Adventure, Sci-Fi, Crime", type: "TV Series" },
  { title: "Sardar Udham", year: 2021, rating: 5, directors: "Shoojit Sircar", genres: "Crime, Drama, History", type: "Movie" },
  { title: "Dhamaka", year: 2021, rating: 4, directors: "Ram Madhvani", genres: "Crime, Thriller, Drama, Action", type: "Movie" },
  { title: "Dune: Part One", year: 2021, rating: 9, directors: "Denis Villeneuve", genres: "Sci-Fi, Adventure, Drama, Action", type: "Movie" },
  { title: "Shershaah", year: 2021, rating: 8, directors: "Vishnuvardhan", genres: "Action, Biography, Drama, War", type: "Movie" },
  { title: "Palm Springs", year: 2020, rating: 7, directors: "Max Barbakow", genres: "Comedy, Romance, Fantasy, Mystery, Sci-Fi", type: "Movie" },
  { title: "Chehre", year: 2021, rating: 5, directors: "Rumi Jaffery", genres: "Drama, Mystery, Thriller", type: "Movie" },
  { title: "Loki", year: 2021, rating: 9, directors: "", genres: "Fantasy, Sci-Fi, Action, Adventure", type: "TV Series" },
  { title: "Madam Chief Minister", year: 2021, rating: 1, directors: "Subhash Kapoor", genres: "Drama", type: "Movie" },
  { title: "Scam 1992: The Harshad Mehta Story", year: 2020, rating: 9, directors: "", genres: "Drama, Crime, Biography, Thriller", type: "TV Mini Series" },
  { title: "Wonder Woman 1984", year: 2020, rating: 2, directors: "Patty Jenkins", genres: "Action, Adventure, Fantasy", type: "Movie" },
  { title: "Aspirants", year: 2021, rating: 7, directors: "", genres: "Drama", type: "TV Series" },
  { title: "Pokémon: Detective Pikachu", year: 2019, rating: 7, directors: "Rob Letterman", genres: "Mystery, Family, Adventure, Comedy", type: "Movie" },
  { title: "Godzilla vs. Kong", year: 2021, rating: 7, directors: "Adam Wingard", genres: "Sci-Fi, Action, Thriller", type: "Movie" },
  { title: "The Lincoln Lawyer", year: 2011, rating: 8, directors: "Brad Furman", genres: "Drama, Crime, Thriller, Mystery", type: "Movie" },
  { title: "Tenet", year: 2020, rating: 9, directors: "Christopher Nolan", genres: "Action, Sci-Fi, Thriller", type: "Movie" },
  { title: "The Witcher", year: 2019, rating: 9, directors: "", genres: "Adventure, Fantasy, Mystery, Action, Drama", type: "TV Series" },
  { title: "The Mandalorian", year: 2019, rating: 10, directors: "", genres: "Sci-Fi, Adventure, Fantasy, Action", type: "TV Series" },
  { title: "The Boys", year: 2019, rating: 9, directors: "", genres: "Action, Sci-Fi, Crime, Comedy, Drama", type: "TV Series" },
  { title: "Inside Man", year: 2006, rating: 8, directors: "Spike Lee", genres: "Crime, Drama, Thriller, Mystery", type: "Movie" },
  { title: "A Beautiful Day in the Neighborhood", year: 2019, rating: 8, directors: "Marielle Heller", genres: "Biography, Drama, Family", type: "Movie" },
  { title: "Wrath of the Titans", year: 2012, rating: 4, directors: "Jonathan Liebesman", genres: "Action, Fantasy, Adventure", type: "Movie" },
  { title: "Clash of the Titans", year: 2010, rating: 6, directors: "Louis Leterrier", genres: "Action, Fantasy, Adventure", type: "Movie" },
  { title: "Prince of Persia: The Sands of Time", year: 2010, rating: 7, directors: "Mike Newell", genres: "Action, Fantasy, Adventure", type: "Movie" },
  { title: "Margin Call", year: 2011, rating: 8, directors: "J.C. Chandor", genres: "Thriller, Drama", type: "Movie" },
  { title: "Mirzapur", year: 2018, rating: 2, directors: "", genres: "Crime, Thriller, Action, Drama", type: "TV Series" },
  { title: "Panchayat", year: 2020, rating: 9, directors: "", genres: "Drama, Comedy", type: "TV Series" },
  { title: "Sacred Games", year: 2018, rating: 7, directors: "", genres: "Drama, Crime, Action, Thriller, Mystery", type: "TV Series" },
  { title: "Special OPS", year: 2020, rating: 9, directors: "", genres: "Thriller, Crime, Action", type: "TV Series" },
  { title: "Little Fockers", year: 2010, rating: 7, directors: "Paul Weitz", genres: "Comedy, Romance", type: "Movie" },
  { title: "Knock Knock", year: 2015, rating: 6, directors: "Eli Roth", genres: "Thriller, Crime", type: "Movie" },
  { title: "Yeh Meri Family", year: 2018, rating: 9, directors: "", genres: "Musical, Family, Comedy, Drama, Romance", type: "TV Series" },
  { title: "Impractical Jokers", year: 2011, rating: 10, directors: "", genres: "Reality-TV, Comedy", type: "TV Series" },
  { title: "Kota Factory", year: 2019, rating: 8, directors: "", genres: "Drama, Comedy", type: "TV Series" },
  { title: "Dark", year: 2017, rating: 10, directors: "", genres: "Mystery, Crime, Drama, Thriller, Sci-Fi", type: "TV Series" },
  { title: "Rick and Morty", year: 2013, rating: 10, directors: "", genres: "Animation, Adventure, Comedy, Sci-Fi", type: "TV Series" },
  { title: "Inside Edge", year: 2017, rating: 8, directors: "", genres: "Sport, Drama", type: "TV Series" },
  { title: "Blow", year: 2001, rating: 7, directors: "Ted Demme", genres: "Biography, Crime, Drama", type: "Movie" },
  { title: "Chak De! India", year: 2007, rating: 10, directors: "Shimit Amin", genres: "Drama, Family, Sport", type: "Movie" },
  { title: "Drishyam", year: 2015, rating: 9, directors: "Nishikant Kamat", genres: "Drama, Thriller, Crime, Mystery", type: "Movie" },
  { title: "Gangs of Wasseypur", year: 2012, rating: 9, directors: "Anurag Kashyap", genres: "Action, Crime, Drama, Thriller, Comedy", type: "Movie" },
  { title: "Rang De Basanti", year: 2006, rating: 9, directors: "Rakeysh Omprakash Mehra", genres: "Drama, Comedy, Crime", type: "Movie" },
  { title: "Before Sunrise", year: 1995, rating: 8, directors: "Richard Linklater", genres: "Comedy, Romance, Drama", type: "Movie" },
  { title: "Andhadhun", year: 2018, rating: 10, directors: "Sriram Raghavan", genres: "Thriller, Crime, Mystery, Comedy", type: "Movie" },
  { title: "Dangal", year: 2016, rating: 8, directors: "Nitesh Tiwari", genres: "Biography, Sport, Drama, Action", type: "Movie" },
  { title: "Like Stars on Earth", year: 2007, rating: 9, directors: "Aamir Khan", genres: "Drama, Family", type: "Movie" },
  { title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", year: 1964, rating: 9, directors: "Stanley Kubrick", genres: "War, Comedy", type: "Movie" },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 10, directors: "Bob Persichetti,Peter Ramsey,Rodney Rothman", genres: "Animation, Action, Sci-Fi, Adventure, Family, Fantasy", type: "Movie" },
  { title: "The Firm", year: 1993, rating: 8, directors: "Sydney Pollack", genres: "Thriller, Mystery, Crime, Drama", type: "Movie" },
  { title: "Ford v Ferrari", year: 2019, rating: 9, directors: "James Mangold", genres: "Action, Drama, Biography, Sport", type: "Movie" },
  { title: "Clueless", year: 1995, rating: 7, directors: "Amy Heckerling", genres: "Romance, Comedy", type: "Movie" },
  { title: "MILF", year: 2018, rating: 4, directors: "Axelle Laffont", genres: "Comedy, Romance", type: "Movie" },
  { title: "Dil Bechara", year: 2020, rating: 7, directors: "Mukesh Chhabra", genres: "Romance, Drama, Comedy", type: "Movie" },
  { title: "365 Days", year: 2020, rating: 1, directors: "Barbara Bialowas,Tomasz Mandes", genres: "Drama, Romance", type: "Movie" },
  { title: "The Old Guard", year: 2020, rating: 7, directors: "Gina Prince-Bythewood", genres: "Action, Thriller, Fantasy", type: "Movie" },
  { title: "Ad Astra", year: 2019, rating: 7, directors: "James Gray", genres: "Sci-Fi, Thriller, Adventure, Drama, Mystery", type: "Movie" },
  { title: "Schindler's List", year: 1993, rating: 10, directors: "Steven Spielberg", genres: "Biography, History, Drama", type: "Movie" },
  { title: "Sleepless in Seattle", year: 1993, rating: 7, directors: "Nora Ephron", genres: "Romance, Drama, Comedy", type: "Movie" },
  { title: "Icarus", year: 2017, rating: 8, directors: "Bryan Fogel", genres: "Documentary, Sport", type: "Movie" },
  { title: "6 Underground", year: 2019, rating: 6, directors: "Michael Bay", genres: "Action, Thriller", type: "Movie" },
  { title: "Extraction", year: 2020, rating: 7, directors: "Sam Hargrave", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Indecent Proposal", year: 1993, rating: 7, directors: "Adrian Lyne", genres: "Romance, Drama", type: "Movie" },
  { title: "The Incredibles", year: 2004, rating: 8, directors: "Brad Bird", genres: "Animation, Action, Adventure, Family", type: "Movie" },
  { title: "Top Gun", year: 1986, rating: 7, directors: "Tony Scott", genres: "Drama, Action", type: "Movie" },
  { title: "Thank You for Smoking", year: 2005, rating: 9, directors: "Jason Reitman", genres: "Comedy, Drama", type: "Movie" },
  { title: "Lucifer", year: 2016, rating: 9, directors: "", genres: "Fantasy, Drama, Crime", type: "TV Series" },
  { title: "Spider-Man: Homecoming", year: 2017, rating: 7, directors: "Jon Watts", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Logan", year: 2017, rating: 8, directors: "James Mangold", genres: "Action, Sci-Fi, Drama, Thriller", type: "Movie" },
  { title: "Guardians of the Galaxy: Vol. 2", year: 2017, rating: 7, directors: "James Gunn", genres: "Action, Sci-Fi, Adventure, Comedy, Fantasy, Music", type: "Movie" },
  { title: "Black Panther", year: 2018, rating: 7, directors: "Ryan Coogler", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Thor: Ragnarok", year: 2017, rating: 8, directors: "Taika Waititi", genres: "Action, Sci-Fi, Adventure, Comedy, Fantasy", type: "Movie" },
  { title: "Avengers: Infinity War", year: 2018, rating: 9, directors: "Anthony Russo,Joe Russo", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Blade Runner 2049", year: 2017, rating: 8, directors: "Denis Villeneuve", genres: "Sci-Fi, Thriller, Action, Drama, Mystery", type: "Movie" },
  { title: "Captain Marvel", year: 2019, rating: 7, directors: "Anna Boden,Ryan Fleck", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Spider-Man: Far from Home", year: 2019, rating: 9, directors: "Jon Watts", genres: "Action, Adventure, Sci-Fi, Comedy, Fantasy", type: "Movie" },
  { title: "Marriage Story", year: 2019, rating: 7, directors: "Noah Baumbach", genres: "Drama, Romance", type: "Movie" },
  { title: "Pulp Fiction", year: 1994, rating: 8, directors: "Quentin Tarantino", genres: "Crime, Drama", type: "Movie" },
  { title: "Avengers: Endgame", year: 2019, rating: 9, directors: "Anthony Russo,Joe Russo", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Joker", year: 2019, rating: 9, directors: "Todd Phillips", genres: "Drama", type: "Movie" },
  { title: "Jojo Rabbit", year: 2019, rating: 8, directors: "Taika Waititi", genres: "Comedy, War, Drama", type: "Movie" },
  { title: "Parasite", year: 2019, rating: 10, directors: "Bong Joon Ho", genres: "Drama, Thriller", type: "Movie" },
  { title: "Once Upon a Time in... Hollywood", year: 2019, rating: 8, directors: "Quentin Tarantino", genres: "Drama, Comedy", type: "Movie" },
  { title: "A Clockwork Orange", year: 1971, rating: 10, directors: "Stanley Kubrick", genres: "Crime, Sci-Fi", type: "Movie" },
  { title: "Donnie Brasco", year: 1997, rating: 8, directors: "Mike Newell", genres: "Biography, Crime, Drama", type: "Movie" },
  { title: "Modern Love", year: 2019, rating: 9, directors: "", genres: "Comedy, Romance, Drama", type: "TV Series" },
  { title: "50/50", year: 2011, rating: 8, directors: "Jonathan Levine", genres: "Comedy, Drama, Romance", type: "Movie" },
  { title: "The Revenant", year: 2015, rating: 10, directors: "Alejandro G. Iñárritu", genres: "Action, Drama, Western", type: "Movie" },
  { title: "Death Proof", year: 2007, rating: 9, directors: "Quentin Tarantino", genres: "Thriller, Drama", type: "Movie" },
  { title: "Fracture", year: 2007, rating: 8, directors: "Gregory Hoblit", genres: "Crime, Drama, Thriller", type: "Movie" },
  { title: "Dark Places", year: 2015, rating: 7, directors: "Gilles Paquet-Brenner", genres: "Drama, Mystery, Thriller, Crime", type: "Movie" },
  { title: "Planet Earth II", year: 2016, rating: 10, directors: "", genres: "Documentary, Family", type: "TV Mini Series" },
  { title: "Prison Break", year: 2005, rating: 9, directors: "", genres: "Mystery, Thriller, Crime, Drama, Action", type: "TV Series" },
  { title: "13 Reasons Why", year: 2017, rating: 9, directors: "", genres: "Drama, Mystery, Thriller", type: "TV Series" },
  { title: "Big Little Lies", year: 2017, rating: 9, directors: "", genres: "Crime, Drama, Mystery", type: "TV Series" },
  { title: "The Game", year: 1997, rating: 8, directors: "David Fincher", genres: "Drama, Thriller, Mystery", type: "Movie" },
  { title: "Lion", year: 2016, rating: 9, directors: "Garth Davis", genres: "Drama, Biography", type: "Movie" },
  { title: "La La Land", year: 2016, rating: 10, directors: "Damien Chazelle", genres: "Musical, Comedy, Drama, Romance, Music", type: "Movie" },
  { title: "Hacksaw Ridge", year: 2016, rating: 9, directors: "Mel Gibson", genres: "Drama, War, History, Biography", type: "Movie" },
  { title: "The Guest", year: 2014, rating: 7, directors: "Adam Wingard", genres: "Thriller, Action, Mystery", type: "Movie" },
  { title: "Legion", year: 2017, rating: 9, directors: "", genres: "Action, Sci-Fi, Thriller", type: "TV Series" },
  { title: "Arrival", year: 2016, rating: 9, directors: "Denis Villeneuve", genres: "Sci-Fi, Drama, Mystery", type: "Movie" },
  { title: "The Edge of Seventeen", year: 2016, rating: 8, directors: "Kelly Fremon Craig", genres: "Comedy, Drama, Romance", type: "Movie" },
  { title: "Fargo", year: 2014, rating: 9, directors: "", genres: "Crime, Drama, Thriller", type: "TV Series" },
  { title: "The Breakfast Club", year: 1985, rating: 9, directors: "John Hughes", genres: "Comedy, Drama", type: "Movie" },
  { title: "Kung Fu Panda 3", year: 2016, rating: 8, directors: "Alessandro Carloni,Jennifer Yuh Nelson", genres: "Animation, Comedy, Action, Adventure, Family, Fantasy", type: "Movie" },
  { title: "Snowden", year: 2016, rating: 8, directors: "Oliver Stone", genres: "Drama, Thriller, Biography, Crime", type: "Movie" },
  { title: "Doctor Strange", year: 2016, rating: 8, directors: "Scott Derrickson", genres: "Fantasy, Adventure, Action, Sci-Fi", type: "Movie" },
  { title: "The Fall", year: 2006, rating: 9, directors: "Tarsem Singh", genres: "Drama, Fantasy, Adventure", type: "Movie" },
  { title: "TVF Pitchers", year: 2015, rating: 9, directors: "", genres: "Drama, Comedy", type: "TV Series" },
  { title: "Planet Earth", year: 2006, rating: 10, directors: "", genres: "Documentary, Family", type: "TV Mini Series" },
  { title: "Mechanic: Resurrection", year: 2016, rating: 4, directors: "Dennis Gansel", genres: "Action, Thriller, Adventure", type: "Movie" },
  { title: "Bad Moms", year: 2016, rating: 5, directors: "Jon Lucas,Scott Moore", genres: "Comedy", type: "Movie" },
  { title: "Star Trek Beyond", year: 2016, rating: 8, directors: "Justin Lin", genres: "Sci-Fi, Action, Adventure, Thriller", type: "Movie" },
  { title: "Silicon Valley", year: 2014, rating: 9, directors: "", genres: "Comedy", type: "TV Series" },
  { title: "Westworld", year: 2016, rating: 10, directors: "", genres: "Sci-Fi, Drama, Mystery", type: "TV Series" },
  { title: "Black Mirror", year: 2011, rating: 10, directors: "", genres: "Drama, Thriller, Sci-Fi, Mystery, Crime", type: "TV Series" },
  { title: "P.S. I Love You", year: 2007, rating: 9, directors: "Richard LaGravenese", genres: "Drama, Romance, Comedy", type: "Movie" },
  { title: "Stranger Things", year: 2016, rating: 9, directors: "", genres: "Drama, Horror, Thriller, Sci-Fi, Mystery, Fantasy", type: "TV Series" },
  { title: "The Lobster", year: 2015, rating: 8, directors: "Yorgos Lanthimos", genres: "Romance, Sci-Fi, Drama, Thriller", type: "Movie" },
  { title: "Upstream Color", year: 2013, rating: 9, directors: "Shane Carruth", genres: "Drama, Sci-Fi, Mystery", type: "Movie" },
  { title: "The Big Lebowski", year: 1998, rating: 9, directors: "Joel Coen,Ethan Coen", genres: "Crime, Comedy", type: "Movie" },
  { title: "The Neon Demon", year: 2016, rating: 8, directors: "Nicolas Winding Refn", genres: "Horror, Thriller", type: "Movie" },
  { title: "Dazed and Confused", year: 1993, rating: 10, directors: "Richard Linklater", genres: "Comedy", type: "Movie" },
  { title: "The Nice Guys", year: 2016, rating: 7, directors: "Shane Black", genres: "Thriller, Crime, Comedy, Action, Mystery", type: "Movie" },
  { title: "Pan's Labyrinth", year: 2006, rating: 8, directors: "Guillermo del Toro", genres: "Drama, Fantasy, War", type: "Movie" },
  { title: "Holy Motors", year: 2012, rating: 8, directors: "Leos Carax", genres: "Drama, Fantasy", type: "Movie" },
  { title: "Die Hard 2", year: 1990, rating: 7, directors: "Renny Harlin", genres: "Thriller, Action", type: "Movie" },
  { title: "The Tree of Life", year: 2011, rating: 8, directors: "Terrence Malick", genres: "Drama, Fantasy", type: "Movie" },
  { title: "Modern Family", year: 2009, rating: 10, directors: "", genres: "Comedy, Romance, Drama", type: "TV Series" },
  { title: "Oldboy", year: 2003, rating: 9, directors: "Park Chan-wook", genres: "Mystery, Thriller, Action, Drama", type: "Movie" },
  { title: "Popstar: Never Stop Never Stopping", year: 2016, rating: 7, directors: "Akiva Schaffer,Jorma Taccone", genres: "Musical, Comedy, Drama, Music", type: "Movie" },
  { title: "Me Before You", year: 2016, rating: 8, directors: "Thea Sharrock", genres: "Drama, Romance", type: "Movie" },
  { title: "E.T. the Extra-Terrestrial", year: 1982, rating: 9, directors: "Steven Spielberg", genres: "Adventure, Sci-Fi, Family", type: "Movie" },
  { title: "Deadpool", year: 2016, rating: 8, directors: "Tim Miller", genres: "Action, Sci-Fi, Comedy", type: "Movie" },
  { title: "Captain America: Civil War", year: 2016, rating: 9, directors: "Anthony Russo,Joe Russo", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "Daredevil", year: 2015, rating: 9, directors: "", genres: "Action, Crime, Drama, Thriller, Sci-Fi", type: "TV Series" },
  { title: "Dead Poets Society", year: 1989, rating: 9, directors: "Peter Weir", genres: "Comedy, Drama", type: "Movie" },
  { title: "After Hours", year: 1985, rating: 8, directors: "Martin Scorsese", genres: "Drama, Crime, Thriller, Comedy", type: "Movie" },
  { title: "Steve Jobs", year: 2015, rating: 8, directors: "Danny Boyle", genres: "Biography, Drama", type: "Movie" },
  { title: "Sherlock Holmes: A Game of Shadows", year: 2011, rating: 8, directors: "Guy Ritchie", genres: "Mystery, Action, Adventure", type: "Movie" },
  { title: "The Jacket", year: 2005, rating: 8, directors: "John Maybury", genres: "Thriller, Mystery, Sci-Fi, Drama, Fantasy", type: "Movie" },
  { title: "Timecrimes", year: 2007, rating: 8, directors: "Nacho Vigalondo", genres: "Sci-Fi, Thriller, Mystery, Horror", type: "Movie" },
  { title: "American Psycho", year: 2000, rating: 8, directors: "Mary Harron", genres: "Crime, Horror, Drama", type: "Movie" },
  { title: "I Origins", year: 2014, rating: 8, directors: "Mike Cahill", genres: "Drama, Sci-Fi, Romance, Mystery", type: "Movie" },
  { title: "Requiem for a Dream", year: 2000, rating: 9, directors: "Darren Aronofsky", genres: "Drama", type: "Movie" },
  { title: "The Fountain", year: 2006, rating: 8, directors: "Darren Aronofsky", genres: "Sci-Fi, Drama, Mystery, Romance", type: "Movie" },
  { title: "When Harry Met Sally...", year: 1989, rating: 9, directors: "Rob Reiner", genres: "Drama, Romance, Comedy", type: "Movie" },
  { title: "Triangle", year: 2009, rating: 8, directors: "Christopher Smith", genres: "Thriller, Mystery, Sci-Fi, Fantasy", type: "Movie" },
  { title: "Predestination", year: 2014, rating: 9, directors: "Michael Spierig,Peter Spierig", genres: "Sci-Fi, Thriller, Drama, Action", type: "Movie" },
  { title: "The Big Short", year: 2015, rating: 8, directors: "Adam McKay", genres: "Drama, Biography, Comedy, History", type: "Movie" },
  { title: "Room", year: 2015, rating: 9, directors: "Lenny Abrahamson", genres: "Drama, Thriller", type: "Movie" },
  { title: "Spotlight", year: 2015, rating: 9, directors: "Tom McCarthy", genres: "Drama, Crime, Biography", type: "Movie" },
  { title: "Southpaw", year: 2015, rating: 9, directors: "Antoine Fuqua", genres: "Drama, Sport, Action", type: "Movie" },
  { title: "The Martian", year: 2015, rating: 9, directors: "Ridley Scott", genres: "Sci-Fi, Adventure, Drama", type: "Movie" },
  { title: "Star Wars: Episode VII - The Force Awakens", year: 2015, rating: 9, directors: "J.J. Abrams", genres: "Sci-Fi, Action, Adventure", type: "Movie" },
  { title: "Spectre", year: 2015, rating: 8, directors: "Sam Mendes", genres: "Adventure, Thriller, Action", type: "Movie" },
  { title: "Ferris Bueller's Day Off", year: 1986, rating: 9, directors: "John Hughes", genres: "Comedy", type: "Movie" },
  { title: "Casino Royale", year: 2006, rating: 9, directors: "Martin Campbell", genres: "Thriller, Action, Adventure", type: "Movie" },
  { title: "The Man from U.N.C.L.E.", year: 2015, rating: 8, directors: "Guy Ritchie", genres: "Action, Adventure, Comedy", type: "Movie" },
  { title: "Pixels", year: 2015, rating: 5, directors: "Chris Columbus", genres: "Comedy, Action, Sci-Fi, Fantasy, Adventure, Thriller", type: "Movie" },
  { title: "Me and Earl and the Dying Girl", year: 2015, rating: 9, directors: "Alfonso Gomez-Rejon", genres: "Drama, Comedy", type: "Movie" },
  { title: "Inside Out", year: 2015, rating: 9, directors: "Pete Docter,Ronnie Del Carmen", genres: "Animation, Comedy, Family, Adventure, Drama, Fantasy", type: "Movie" },
  { title: "Mission: Impossible - Rogue Nation", year: 2015, rating: 8, directors: "Christopher McQuarrie", genres: "Action, Adventure, Thriller", type: "Movie" },
  { title: "Vertigo", year: 1958, rating: 8, directors: "Alfred Hitchcock", genres: "Romance, Thriller, Mystery", type: "Movie" },
  { title: "Dial M for Murder", year: 1954, rating: 9, directors: "Alfred Hitchcock", genres: "Crime, Mystery, Drama, Thriller", type: "Movie" },
  { title: "Fantastic Four", year: 2015, rating: 5, directors: "Josh Trank", genres: "Animation, Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "The Girl with the Dragon Tattoo", year: 2011, rating: 9, directors: "David Fincher", genres: "Drama, Thriller, Crime, Mystery", type: "Movie" },
  { title: "Warrior", year: 2011, rating: 9, directors: "Gavin O'Connor", genres: "Drama, Sport, Action", type: "Movie" },
  { title: "The Others", year: 2001, rating: 8, directors: "Alejandro Amenábar", genres: "Mystery, Thriller, Horror", type: "Movie" },
  { title: "The Number 23", year: 2007, rating: 8, directors: "Joel Schumacher", genres: "Mystery, Thriller, Crime", type: "Movie" },
  { title: "Fermat's Room", year: 2007, rating: 9, directors: "Luis Piedrahita,Rodrigo Sopeña", genres: "Thriller, Mystery", type: "Movie" },
  { title: "Friends", year: 1994, rating: 10, directors: "", genres: "Romance, Comedy", type: "TV Series" },
  { title: "The Judge", year: 2014, rating: 8, directors: "David Dobkin", genres: "Drama, Crime, Mystery, Thriller", type: "Movie" },
  { title: "Jurassic Park", year: 1993, rating: 9, directors: "Steven Spielberg", genres: "Sci-Fi, Adventure", type: "Movie" },
  { title: "Jurassic World", year: 2015, rating: 8, directors: "Colin Trevorrow", genres: "Adventure, Sci-Fi, Action", type: "Movie" },
  { title: "Rain Man", year: 1988, rating: 8, directors: "Barry Levinson", genres: "Drama", type: "Movie" },
  { title: "Jupiter Ascending", year: 2015, rating: 5, directors: "Lana Wachowski,Lilly Wachowski", genres: "Sci-Fi, Action, Adventure, Romance", type: "Movie" },
  { title: "Moneyball", year: 2011, rating: 9, directors: "Bennett Miller", genres: "Drama, Sport, Biography", type: "Movie" },
  { title: "Focus", year: 2015, rating: 8, directors: "Glenn Ficarra,John Requa", genres: "Comedy, Crime, Romance, Drama", type: "Movie" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 9, directors: "George Miller", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Kingsman: The Secret Service", year: 2014, rating: 9, directors: "Matthew Vaughn", genres: "Adventure, Action, Comedy, Thriller", type: "Movie" },
  { title: "The Talented Mr. Ripley", year: 1999, rating: 8, directors: "Anthony Minghella", genres: "Crime, Drama, Thriller", type: "Movie" },
  { title: "Mulholland Drive", year: 2001, rating: 9, directors: "David Lynch", genres: "Drama, Thriller, Mystery", type: "Movie" },
  { title: "The Butterfly Effect", year: 2004, rating: 9, directors: "Eric Bress,J. Mackye Gruber", genres: "Sci-Fi, Drama, Thriller", type: "Movie" },
  { title: "The Grand Budapest Hotel", year: 2014, rating: 9, directors: "Wes Anderson", genres: "Comedy, Drama", type: "Movie" },
  { title: "Big Hero 6", year: 2014, rating: 9, directors: "Don Hall,Chris Williams", genres: "Animation, Action, Family, Sci-Fi, Adventure, Comedy, Crime, Drama", type: "Movie" },
  { title: "Whiplash", year: 2014, rating: 9, directors: "Damien Chazelle", genres: "Drama, Music", type: "Movie" },
  { title: "The Imitation Game", year: 2014, rating: 9, directors: "Morten Tyldum", genres: "Drama, Biography, Thriller, War", type: "Movie" },
  { title: "The Theory of Everything", year: 2014, rating: 8, directors: "James Marsh", genres: "Drama, Biography, Romance", type: "Movie" },
  { title: "300", year: 2006, rating: 10, directors: "Zack Snyder", genres: "Action, Drama", type: "Movie" },
  { title: "Harry Potter and the Goblet of Fire", year: 2005, rating: 8, directors: "Mike Newell", genres: "Mystery, Family, Adventure, Fantasy", type: "Movie" },
  { title: "Ocean's Eleven", year: 2001, rating: 8, directors: "Steven Soderbergh", genres: "Thriller, Crime", type: "Movie" },
  { title: "Harry Potter and the Sorcerer's Stone", year: 2001, rating: 8, directors: "Chris Columbus", genres: "Family, Adventure, Fantasy", type: "Movie" },
  { title: "Die Hard with a Vengeance", year: 1995, rating: 9, directors: "John McTiernan", genres: "Adventure, Thriller, Action", type: "Movie" },
  { title: "Kiss Kiss Bang Bang", year: 2005, rating: 8, directors: "Shane Black", genres: "Comedy, Mystery, Crime, Thriller", type: "Movie" },
  { title: "Nightcrawler", year: 2014, rating: 9, directors: "Dan Gilroy", genres: "Crime, Thriller, Drama", type: "Movie" },
  { title: "Gone Girl", year: 2014, rating: 9, directors: "David Fincher", genres: "Thriller, Drama, Mystery", type: "Movie" },
  { title: "The Hobbit: The Battle of the Five Armies", year: 2014, rating: 9, directors: "Peter Jackson", genres: "Adventure, Fantasy", type: "Movie" },
  { title: "Stranger Than Fiction", year: 2006, rating: 9, directors: "Marc Forster", genres: "Fantasy, Drama, Romance, Comedy", type: "Movie" },
  { title: "Dawn of the Planet of the Apes", year: 2014, rating: 9, directors: "Matt Reeves", genres: "Action, Adventure, Drama, Sci-Fi, Thriller", type: "Movie" },
  { title: "Taxi Driver", year: 1976, rating: 9, directors: "Martin Scorsese", genres: "Crime, Drama", type: "Movie" },
  { title: "Fargo", year: 1996, rating: 8, directors: "Joel Coen,Ethan Coen", genres: "Drama, Thriller, Crime", type: "Movie" },
  { title: "Interstellar", year: 2014, rating: 10, directors: "Christopher Nolan", genres: "Sci-Fi, Adventure, Drama", type: "Movie" },
  { title: "Guardians of the Galaxy", year: 2014, rating: 8, directors: "James Gunn", genres: "Sci-Fi, Action, Adventure, Comedy", type: "Movie" },
  { title: "The Conjuring", year: 2013, rating: 9, directors: "James Wan", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "Oculus", year: 2014, rating: 8, directors: "Mike Flanagan", genres: "Horror, Mystery, Thriller", type: "Movie" },
  { title: "House of Cards", year: 2013, rating: 10, directors: "", genres: "Drama, Thriller", type: "TV Series" },
  { title: "22 Jump Street", year: 2014, rating: 8, directors: "Phil Lord,Christopher Miller", genres: "Comedy, Action, Crime, Mystery", type: "Movie" },
  { title: "I Saw the Devil", year: 2010, rating: 9, directors: "Kim Jee-woon", genres: "Thriller, Action", type: "Movie" },
  { title: "Memento", year: 2000, rating: 8, directors: "Christopher Nolan", genres: "Thriller, Mystery", type: "Movie" },
  { title: "Divergent", year: 2014, rating: 8, directors: "Neil Burger", genres: "Mystery, Sci-Fi, Adventure, Action, Drama", type: "Movie" },
  { title: "Movie 43", year: 2013, rating: 3, directors: "Multiple", genres: "Comedy", type: "Movie" },
  { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, rating: 9, directors: "Gore Verbinski", genres: "Fantasy, Action, Adventure", type: "Movie" },
  { title: "Gandhi", year: 1982, rating: 9, directors: "Richard Attenborough", genres: "Biography, History, Drama", type: "Movie" },
  { title: "12 Years a Slave", year: 2013, rating: 8, directors: "Steve McQueen", genres: "Drama, History, Biography", type: "Movie" },
  { title: "The Shining", year: 1980, rating: 8, directors: "Stanley Kubrick", genres: "Drama, Horror", type: "Movie" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, rating: 9, directors: "Irvin Kershner", genres: "Fantasy, Sci-Fi, Adventure", type: "Movie" },
  { title: "The Fault in Our Stars", year: 2014, rating: 9, directors: "Josh Boone", genres: "Drama, Romance", type: "Movie" },
  { title: "How to Train Your Dragon 2", year: 2014, rating: 9, directors: "Dean DeBlois", genres: "Animation, Fantasy, Adventure, Action, Family, Comedy", type: "Movie" },
  { title: "Scott Pilgrim vs. the World", year: 2010, rating: 8, directors: "Edgar Wright", genres: "Action, Comedy, Romance, Fantasy", type: "Movie" },
  { title: "Shrek", year: 2001, rating: 9, directors: "Andrew Adamson,Vicky Jenson", genres: "Animation, Fantasy, Comedy, Family, Adventure, Romance", type: "Movie" },
  { title: "Monsters, Inc.", year: 2001, rating: 8, directors: "Pete Docter,David Silverman,Lee Unkrich", genres: "Animation, Adventure, Comedy, Family, Fantasy", type: "Movie" },
  { title: "Independence Day", year: 1996, rating: 9, directors: "Roland Emmerich", genres: "Adventure, Sci-Fi, Action", type: "Movie" },
  { title: "Battleship", year: 2012, rating: 9, directors: "Peter Berg", genres: "Action, Sci-Fi, Thriller, Adventure", type: "Movie" },
  { title: "Terminator 2: Judgment Day", year: 1991, rating: 9, directors: "James Cameron", genres: "Adventure, Sci-Fi, Action", type: "Movie" },
  { title: "The Terminator", year: 1984, rating: 9, directors: "James Cameron", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "X-Men: The Last Stand", year: 2006, rating: 8, directors: "Brett Ratner", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "American Pie", year: 1999, rating: 8, directors: "Paul Weitz", genres: "Comedy", type: "Movie" },
  { title: "American Reunion", year: 2012, rating: 8, directors: "Jon Hurwitz,Hayden Schlossberg", genres: "Comedy", type: "Movie" },
  { title: "2012", year: 2009, rating: 8, directors: "Roland Emmerich", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Insomnia", year: 2002, rating: 9, directors: "Christopher Nolan", genres: "Mystery, Drama, Thriller", type: "Movie" },
  { title: "The Lego Movie", year: 2014, rating: 7, directors: "Phil Lord,Christopher Miller", genres: "Animation, Comedy, Family, Adventure, Fantasy, Sci-Fi, Action", type: "Movie" },
  { title: "Captain America: The Winter Soldier", year: 2014, rating: 8, directors: "Anthony Russo,Joe Russo", genres: "Action, Adventure, Sci-Fi, Thriller", type: "Movie" },
  { title: "3 Idiots", year: 2009, rating: 9, directors: "Rajkumar Hirani", genres: "Drama, Comedy", type: "Movie" },
  { title: "Inglourious Basterds", year: 2009, rating: 10, directors: "Quentin Tarantino", genres: "War, Drama", type: "Movie" },
  { title: "Fight Club", year: 1999, rating: 10, directors: "David Fincher", genres: "Drama, Crime, Thriller", type: "Movie" },
  { title: "The Illusionist", year: 2006, rating: 9, directors: "Neil Burger", genres: "Drama, Romance, Mystery, Thriller, Fantasy", type: "Movie" },
  { title: "Iron Man", year: 2008, rating: 9, directors: "Jon Favreau", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Gravity", year: 2013, rating: 9, directors: "Alfonso Cuarón", genres: "Sci-Fi, Thriller, Drama", type: "Movie" },
  { title: "Inception", year: 2010, rating: 9, directors: "Christopher Nolan", genres: "Sci-Fi, Thriller, Adventure", type: "Movie" },
  { title: "How I Met Your Mother", year: 2005, rating: 10, directors: "", genres: "Comedy, Romance, Drama", type: "TV Series" },
  { title: "Sherlock", year: 2010, rating: 10, directors: "", genres: "Crime, Mystery, Drama, Thriller", type: "TV Series" },
  { title: "The Hunger Games: Catching Fire", year: 2013, rating: 9, directors: "Francis Lawrence", genres: "Sci-Fi, Thriller, Action, Adventure, Romance", type: "Movie" },
  { title: "The Wolf of Wall Street", year: 2013, rating: 9, directors: "Martin Scorsese", genres: "Crime, Drama, Biography, Comedy", type: "Movie" },
  { title: "The Bourne Identity", year: 2002, rating: 8, directors: "Doug Liman", genres: "Mystery, Thriller, Action", type: "Movie" },
  { title: "The Vampire Diaries", year: 2009, rating: 10, directors: "", genres: "Drama, Horror, Romance, Fantasy, Mystery, Thriller", type: "TV Series" },
  { title: "Serenity", year: 2005, rating: 8, directors: "Joss Whedon", genres: "Action, Adventure, Sci-Fi, Thriller", type: "Movie" },
  { title: "The Hobbit: An Unexpected Journey", year: 2012, rating: 9, directors: "Peter Jackson", genres: "Fantasy, Adventure", type: "Movie" },
  { title: "How to Train Your Dragon", year: 2010, rating: 9, directors: "Dean DeBlois,Chris Sanders", genres: "Animation, Adventure, Fantasy, Family, Action", type: "Movie" },
  { title: "The Godfather Part II", year: 1974, rating: 9, directors: "Francis Ford Coppola", genres: "Crime, Drama", type: "Movie" },
  { title: "The Great Gatsby", year: 2013, rating: 8, directors: "Baz Luhrmann", genres: "Drama, Romance", type: "Movie" },
  { title: "Hachi: A Dog's Tale", year: 2009, rating: 9, directors: "Lasse Hallström", genres: "Drama, Family, Biography", type: "Movie" },
  { title: "The Terminal", year: 2004, rating: 8, directors: "Steven Spielberg", genres: "Drama, Comedy, Romance", type: "Movie" },
  { title: "Into the Wild", year: 2007, rating: 8, directors: "Sean Penn", genres: "Drama, Adventure, Biography", type: "Movie" },
  { title: "Shaun of the Dead", year: 2004, rating: 8, directors: "Edgar Wright", genres: "Comedy, Horror", type: "Movie" },
  { title: "Almost Famous", year: 2000, rating: 9, directors: "Cameron Crowe", genres: "Music, Comedy, Adventure, Drama", type: "Movie" },
  { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 10, directors: "Peter Jackson", genres: "Drama, Adventure, Fantasy", type: "Movie" },
  { title: "The Lord of the Rings: The Two Towers", year: 2002, rating: 10, directors: "Peter Jackson", genres: "Drama, Adventure, Fantasy", type: "Movie" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 9, directors: "Peter Jackson", genres: "Drama, Adventure, Fantasy", type: "Movie" },
  { title: "Armageddon", year: 1998, rating: 9, directors: "Michael Bay", genres: "Adventure, Sci-Fi, Thriller, Action", type: "Movie" },
  { title: "Man of Steel", year: 2013, rating: 9, directors: "Zack Snyder", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "The Matrix Revolutions", year: 2003, rating: 8, directors: "Lana Wachowski,Lilly Wachowski", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "Star Trek Into Darkness", year: 2013, rating: 10, directors: "J.J. Abrams", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Iron Man 3", year: 2013, rating: 9, directors: "Shane Black", genres: "Action, Adventure, Sci-Fi", type: "Movie" },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983, rating: 9, directors: "Richard Marquand", genres: "Action, Sci-Fi, Adventure, Fantasy", type: "Movie" },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977, rating: 9, directors: "George Lucas", genres: "Action, Sci-Fi, Adventure, Fantasy", type: "Movie" },
  { title: "The Curious Case of Benjamin Button", year: 2008, rating: 8, directors: "David Fincher", genres: "Romance, Drama, Fantasy", type: "Movie" },
  { title: "Eyes Wide Shut", year: 1999, rating: 8, directors: "Stanley Kubrick", genres: "Mystery, Drama, Thriller", type: "Movie" },
  { title: "Alice in Wonderland", year: 2010, rating: 8, directors: "Tim Burton", genres: "Fantasy, Family, Adventure, Mystery", type: "Movie" },
  { title: "Edward Scissorhands", year: 1990, rating: 9, directors: "Tim Burton", genres: "Drama, Romance, Fantasy", type: "Movie" },
  { title: "2001: A Space Odyssey", year: 1968, rating: 8, directors: "Stanley Kubrick", genres: "Adventure, Sci-Fi", type: "Movie" },
  { title: "GoodFellas", year: 1990, rating: 8, directors: "Martin Scorsese", genres: "Biography, Crime, Drama", type: "Movie" },
  { title: "Back to the Future", year: 1985, rating: 8, directors: "Robert Zemeckis", genres: "Comedy, Sci-Fi, Adventure", type: "Movie" },
  { title: "Children of Men", year: 2006, rating: 9, directors: "Alfonso Cuarón", genres: "Thriller, Drama, Sci-Fi", type: "Movie" },
  { title: "The Lion King", year: 1994, rating: 8, directors: "Roger Allers,Rob Minkoff", genres: "Animation, Musical, Drama, Adventure, Family", type: "Movie" },
  { title: "Finding Nemo", year: 2003, rating: 8, directors: "Andrew Stanton,Lee Unkrich", genres: "Animation, Family, Comedy, Adventure", type: "Movie" },
  { title: "Wreck-It Ralph", year: 2012, rating: 10, directors: "Rich Moore", genres: "Animation, Comedy, Family, Adventure, Fantasy, Sci-Fi, Sport", type: "Movie" },
  { title: "RED", year: 2010, rating: 9, directors: "Robert Schwentke", genres: "Action, Comedy, Thriller, Crime", type: "Movie" },
  { title: "The Hunger Games", year: 2012, rating: 8, directors: "Gary Ross", genres: "Adventure, Sci-Fi, Thriller, Action", type: "Movie" },
  { title: "Swordfish", year: 2001, rating: 8, directors: "Dominic Sena", genres: "Crime, Thriller, Action", type: "Movie" },
  { title: "North Country", year: 2005, rating: 9, directors: "Niki Caro", genres: "Drama", type: "Movie" },
  { title: "The Score", year: 2001, rating: 8, directors: "Frank Oz", genres: "Drama, Crime, Thriller", type: "Movie" },
  { title: "Donnie Darko", year: 2001, rating: 8, directors: "Richard Kelly", genres: "Sci-Fi, Thriller, Mystery, Drama", type: "Movie" },
  { title: "12 Monkeys", year: 1995, rating: 8, directors: "Terry Gilliam", genres: "Mystery, Sci-Fi, Thriller", type: "Movie" },
  { title: "Wedding Crashers", year: 2005, rating: 8, directors: "David Dobkin", genres: "Comedy, Romance", type: "Movie" },
  { title: "Sin City", year: 2005, rating: 9, directors: "Frank Miller,Robert Rodriguez", genres: "Crime, Thriller", type: "Movie" },
  { title: "The Town", year: 2010, rating: 8, directors: "Ben Affleck", genres: "Drama, Thriller, Crime", type: "Movie" },
  { title: "Stardust", year: 2007, rating: 10, directors: "Matthew Vaughn", genres: "Adventure, Fantasy, Romance", type: "Movie" },
  { title: "Black Swan", year: 2010, rating: 8, directors: "Darren Aronofsky", genres: "Drama, Thriller", type: "Movie" },
  { title: "Sleepy Hollow", year: 1999, rating: 9, directors: "Tim Burton", genres: "Mystery, Fantasy, Horror", type: "Movie" },
  { title: "Drive", year: 2011, rating: 8, directors: "Nicolas Winding Refn", genres: "Drama, Action", type: "Movie" },
  { title: "American History X", year: 1998, rating: 9, directors: "Tony Kaye", genres: "Drama, Crime", type: "Movie" },
  { title: "The Hangover", year: 2009, rating: 8, directors: "Todd Phillips", genres: "Comedy", type: "Movie" },
  { title: "Blood Diamond", year: 2006, rating: 8, directors: "Edward Zwick", genres: "Drama, Adventure, Thriller", type: "Movie" },
  { title: "The Truman Show", year: 1998, rating: 8, directors: "Peter Weir", genres: "Comedy, Drama", type: "Movie" },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 9, directors: "Michel Gondry", genres: "Drama, Sci-Fi, Romance", type: "Movie" },
  { title: "3:10 to Yuma", year: 2007, rating: 8, directors: "James Mangold", genres: "Western, Drama, Crime, Action", type: "Movie" },
  { title: "Definitely, Maybe", year: 2008, rating: 10, directors: "Adam Brooks", genres: "Comedy, Romance, Drama", type: "Movie" },
  { title: "An Education", year: 2009, rating: 8, directors: "Lone Scherfig", genres: "Drama", type: "Movie" },
  { title: "Toy Story", year: 1995, rating: 9, directors: "John Lasseter", genres: "Animation, Adventure, Comedy, Family, Fantasy", type: "Movie" },
  { title: "Kick-Ass", year: 2010, rating: 10, directors: "Matthew Vaughn", genres: "Comedy, Action, Crime", type: "Movie" },
  { title: "Cruel Intentions", year: 1999, rating: 8, directors: "Roger Kumble", genres: "Romance, Drama", type: "Movie" },
  { title: "The Italian Job", year: 2003, rating: 8, directors: "F. Gary Gray", genres: "Thriller, Crime, Action", type: "Movie" },
  { title: "The Sorcerer's Apprentice", year: 2010, rating: 8, directors: "Jon Turteltaub", genres: "Fantasy, Action, Adventure, Family", type: "Movie" },
  { title: "Argo", year: 2012, rating: 10, directors: "Ben Affleck", genres: "Thriller, Drama, Biography, History", type: "Movie" },
  { title: "Ted", year: 2012, rating: 8, directors: "Seth MacFarlane", genres: "Comedy", type: "Movie" },
  { title: "Good Will Hunting", year: 1997, rating: 8, directors: "Gus Van Sant", genres: "Romance, Drama", type: "Movie" },
  { title: "Swades", year: 2004, rating: 8, directors: "Ashutosh Gowariker", genres: "Musical, Drama", type: "Movie" },
  { title: "Perfume: The Story of a Murderer", year: 2006, rating: 10, directors: "Tom Tykwer", genres: "Drama, Crime, Fantasy", type: "Movie" },
  { title: "Toy Story 3", year: 2010, rating: 9, directors: "Lee Unkrich", genres: "Animation, Adventure, Comedy, Family, Fantasy", type: "Movie" },
  { title: "Toy Story 2", year: 1999, rating: 8, directors: "John Lasseter,Ash Brannon,Lee Unkrich", genres: "Animation, Adventure, Comedy, Family, Fantasy", type: "Movie" },
  { title: "The Devil's Advocate", year: 1997, rating: 9, directors: "Taylor Hackford", genres: "Thriller, Mystery, Fantasy, Drama", type: "Movie" },
  { title: "Red Dragon", year: 2002, rating: 8, directors: "Brett Ratner", genres: "Drama, Crime, Thriller", type: "Movie" },
  { title: "The Usual Suspects", year: 1995, rating: 9, directors: "Bryan Singer", genres: "Drama, Crime, Mystery, Thriller", type: "Movie" },
  { title: "L.A. Confidential", year: 1997, rating: 9, directors: "Curtis Hanson", genres: "Crime, Drama, Thriller, Mystery", type: "Movie" },
  { title: "Looper", year: 2012, rating: 8, directors: "Rian Johnson", genres: "Sci-Fi, Action, Thriller, Drama", type: "Movie" },
  { title: "Equilibrium", year: 2002, rating: 8, directors: "Kurt Wimmer", genres: "Drama, Sci-Fi, Thriller, Action", type: "Movie" },
  { title: "500 Days of Summer", year: 2009, rating: 9, directors: "Marc Webb", genres: "Comedy, Drama, Romance", type: "Movie" },
  { title: "The Avengers", year: 2012, rating: 9, directors: "Joss Whedon", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "The Silence of the Lambs", year: 1991, rating: 9, directors: "Jonathan Demme", genres: "Crime, Drama, Horror, Thriller", type: "Movie" },
  { title: "Taken", year: 2008, rating: 8, directors: "Pierre Morel", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Snatch", year: 2000, rating: 9, directors: "Guy Ritchie", genres: "Comedy, Crime", type: "Movie" },
  { title: "X-Men: First Class", year: 2011, rating: 8, directors: "Matthew Vaughn", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "21 Jump Street", year: 2012, rating: 8, directors: "Phil Lord,Christopher Miller", genres: "Action, Comedy, Crime", type: "Movie" },
  { title: "American Beauty", year: 1999, rating: 9, directors: "Sam Mendes", genres: "Drama", type: "Movie" },
  { title: "Mystic River", year: 2003, rating: 9, directors: "Clint Eastwood", genres: "Crime, Mystery, Thriller, Drama", type: "Movie" },
  { title: "Silver Linings Playbook", year: 2012, rating: 10, directors: "David O. Russell", genres: "Drama, Romance, Comedy", type: "Movie" },
  { title: "Transformers", year: 2007, rating: 9, directors: "Michael Bay", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "Raiders of the Lost Ark", year: 1981, rating: 9, directors: "Steven Spielberg", genres: "Adventure", type: "Movie" },
  { title: "The Fighter", year: 2010, rating: 10, directors: "David O. Russell", genres: "Drama, Sport, Biography, Action", type: "Movie" },
  { title: "The Sixth Sense", year: 1999, rating: 9, directors: "M. Night Shyamalan", genres: "Mystery, Drama, Thriller", type: "Movie" },
  { title: "Cast Away", year: 2000, rating: 8, directors: "Robert Zemeckis", genres: "Romance, Drama, Adventure", type: "Movie" },
  { title: "Munich", year: 2005, rating: 8, directors: "Steven Spielberg", genres: "Drama, Thriller, History", type: "Movie" },
  { title: "The Godfather", year: 1972, rating: 9, directors: "Francis Ford Coppola", genres: "Crime, Drama", type: "Movie" },
  { title: "The Last Samurai", year: 2003, rating: 8, directors: "Edward Zwick", genres: "Drama, Action", type: "Movie" },
  { title: "Mr. & Mrs. Smith", year: 2005, rating: 8, directors: "Doug Liman", genres: "Comedy, Crime, Thriller, Action", type: "Movie" },
  { title: "Public Enemies", year: 2009, rating: 8, directors: "Michael Mann", genres: "Crime, Drama, Biography, History", type: "Movie" },
  { title: "Sweeney Todd: The Demon Barber of Fleet Street", year: 2007, rating: 9, directors: "Tim Burton", genres: "Musical, Drama, Thriller, Horror", type: "Movie" },
  { title: "Limitless", year: 2011, rating: 8, directors: "Neil Burger", genres: "Thriller, Sci-Fi", type: "Movie" },
  { title: "Watchmen", year: 2009, rating: 9, directors: "Zack Snyder", genres: "Sci-Fi, Action, Mystery, Drama", type: "Movie" },
  { title: "Die Hard", year: 1988, rating: 9, directors: "John McTiernan", genres: "Thriller, Action", type: "Movie" },
  { title: "The Machinist", year: 2004, rating: 8, directors: "Brad Anderson", genres: "Thriller, Drama", type: "Movie" },
  { title: "Real Steel", year: 2011, rating: 9, directors: "Shawn Levy", genres: "Drama, Sci-Fi, Sport, Action", type: "Movie" },
  { title: "A Beautiful Mind", year: 2001, rating: 9, directors: "Ron Howard", genres: "Biography, Mystery, Drama", type: "Movie" },
  { title: "Law Abiding Citizen", year: 2009, rating: 8, directors: "F. Gary Gray", genres: "Drama, Thriller, Crime, Action", type: "Movie" },
  { title: "The Bourne Supremacy", year: 2004, rating: 8, directors: "Paul Greengrass", genres: "Thriller, Action, Mystery", type: "Movie" },
  { title: "Step Up 3D", year: 2010, rating: 8, directors: "Jon M. Chu", genres: "Drama, Music, Romance", type: "Movie" },
  { title: "Step Up 2: The Streets", year: 2008, rating: 8, directors: "Jon M. Chu", genres: "Drama, Romance, Music", type: "Movie" },
  { title: "Source Code", year: 2011, rating: 8, directors: "Duncan Jones", genres: "Sci-Fi, Thriller, Action, Drama, Mystery", type: "Movie" },
  { title: "Up", year: 2009, rating: 8, directors: "Pete Docter,Bob Peterson", genres: "Animation, Family, Adventure, Comedy, Drama", type: "Movie" },
  { title: "Kung Fu Panda", year: 2008, rating: 9, directors: "Mark Osborne,John Stevenson", genres: "Animation, Comedy, Action, Adventure, Family, Fantasy", type: "Movie" },
  { title: "Kung Fu Panda 2", year: 2011, rating: 9, directors: "Jennifer Yuh Nelson", genres: "Animation, Comedy, Action, Family, Adventure, Fantasy, Drama", type: "Movie" },
  { title: "The Amazing Spider-Man", year: 2012, rating: 8, directors: "Marc Webb", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "Zodiac", year: 2007, rating: 8, directors: "David Fincher", genres: "Drama, Thriller, Crime, Mystery", type: "Movie" },
  { title: "The Prestige", year: 2006, rating: 10, directors: "Christopher Nolan", genres: "Drama, Thriller, Mystery, Sci-Fi", type: "Movie" },
  { title: "Avatar", year: 2009, rating: 8, directors: "James Cameron", genres: "Sci-Fi, Action, Adventure, Fantasy", type: "Movie" },
  { title: "Harry Potter and the Deathly Hallows: Part 2", year: 2011, rating: 8, directors: "David Yates", genres: "Adventure, Mystery, Fantasy, Family", type: "Movie" },
  { title: "Shutter Island", year: 2010, rating: 8, directors: "Martin Scorsese", genres: "Thriller, Mystery", type: "Movie" },
  { title: "Spider-Man 3", year: 2007, rating: 9, directors: "Sam Raimi", genres: "Action, Sci-Fi, Adventure", type: "Movie" },
  { title: "The Island", year: 2005, rating: 8, directors: "Michael Bay", genres: "Sci-Fi, Thriller, Action", type: "Movie" },
  { title: "V for Vendetta", year: 2005, rating: 10, directors: "James McTeigue", genres: "Thriller, Action, Drama, Sci-Fi", type: "Movie" },
  { title: "The Matrix Reloaded", year: 2003, rating: 9, directors: "Lana Wachowski,Lilly Wachowski", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "The Matrix", year: 1999, rating: 10, directors: "Lana Wachowski,Lilly Wachowski", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "Catch Me If You Can", year: 2002, rating: 10, directors: "Steven Spielberg", genres: "Drama, Biography, Crime", type: "Movie" },
  { title: "Transformers: Dark of the Moon", year: 2011, rating: 10, directors: "Michael Bay", genres: "Action, Adventure, Sci-Fi, Comedy, Thriller", type: "Movie" },
  { title: "Star Trek", year: 2009, rating: 8, directors: "J.J. Abrams", genres: "Sci-Fi, Action, Adventure", type: "Movie" },
  { title: "Angels & Demons", year: 2009, rating: 8, directors: "Ron Howard", genres: "Mystery, Thriller", type: "Movie" },
  { title: "The Da Vinci Code", year: 2006, rating: 9, directors: "Ron Howard", genres: "Thriller, Mystery", type: "Movie" },
  { title: "Saving Private Ryan", year: 1998, rating: 8, directors: "Steven Spielberg", genres: "Drama, War", type: "Movie" },
  { title: "Indiana Jones and the Last Crusade", year: 1989, rating: 8, directors: "Steven Spielberg", genres: "Adventure", type: "Movie" },
  { title: "Skyfall", year: 2012, rating: 9, directors: "Sam Mendes", genres: "Action, Thriller, Adventure", type: "Movie" },
  { title: "Life of Pi", year: 2012, rating: 8, directors: "Ang Lee", genres: "Drama, Adventure, Fantasy", type: "Movie" },
  { title: "Minority Report", year: 2002, rating: 9, directors: "Steven Spielberg", genres: "Crime, Sci-Fi, Mystery, Thriller, Action", type: "Movie" },
  { title: "Face/Off", year: 1997, rating: 9, directors: "John Woo", genres: "Crime, Thriller, Action, Sci-Fi", type: "Movie" },
  { title: "Wanted", year: 2008, rating: 8, directors: "Timur Bekmambetov", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Gladiator", year: 2000, rating: 9, directors: "Ridley Scott", genres: "Action, Adventure, Drama", type: "Movie" },
  { title: "Iron Man 2", year: 2010, rating: 8, directors: "Jon Favreau", genres: "Action, Sci-Fi", type: "Movie" },
  { title: "Sherlock Holmes", year: 2009, rating: 9, directors: "Guy Ritchie", genres: "Adventure, Mystery, Action", type: "Movie" },
  { title: "The Bourne Ultimatum", year: 2007, rating: 10, directors: "Paul Greengrass", genres: "Action, Thriller, Mystery", type: "Movie" },
  { title: "Forrest Gump", year: 1994, rating: 10, directors: "Robert Zemeckis", genres: "Romance, Drama", type: "Movie" },
  { title: "No Country for Old Men", year: 2007, rating: 9, directors: "Ethan Coen,Joel Coen", genres: "Thriller, Crime, Drama", type: "Movie" },
  { title: "Seven", year: 1995, rating: 9, directors: "David Fincher", genres: "Mystery, Drama, Crime, Thriller", type: "Movie" },
  { title: "National Treasure", year: 2004, rating: 10, directors: "Jon Turteltaub", genres: "Adventure, Action, Thriller, Mystery", type: "Movie" },
  { title: "National Treasure: Book of Secrets", year: 2007, rating: 9, directors: "Jon Turteltaub", genres: "Action, Adventure, Mystery, Thriller", type: "Movie" },
  { title: "Fast Five", year: 2011, rating: 8, directors: "Justin Lin", genres: "Action, Thriller, Crime", type: "Movie" },
  { title: "Batman Begins", year: 2005, rating: 9, directors: "Christopher Nolan", genres: "Crime", type: "Movie" },
  { title: "Live Free or Die Hard", year: 2007, rating: 8, directors: "Len Wiseman", genres: "Thriller, Action", type: "Movie" },
  { title: "The Dark Knight", year: 2008, rating: 10, directors: "Christopher Nolan", genres: "Crime, Thriller", type: "Movie" },
  { title: "The Dark Knight Rises", year: 2012, rating: 10, directors: "Christopher Nolan", genres: "Thriller, Crime", type: "Movie" }
];

// Helper: Normalize movie title for fuzzy comparison
function normalizeTitle(t: string): string {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// Find a direct rating from Gaurav's IMDb ratings database
export function findGauravRating(title: string, year?: number): GauravRatingEntry | undefined {
  const norm = normalizeTitle(title);
  return GAURAV_IMDB_RATINGS.find(r => {
    const rNorm = normalizeTitle(r.title);
    if (rNorm === norm) return true;
    if (norm.includes(rNorm) || rNorm.includes(norm)) {
      if (year && r.year) return Math.abs(r.year - year) <= 1;
      return true;
    }
    return false;
  });
}

// Contrastive Taste Model: Calculates positive alignment & negative penalty
export interface ContrastiveEvaluation {
  contrastiveScore: number;
  isDirectlyRated: boolean;
  directRating?: number;
  positiveAffinities: string[];
  negativePenalties: string[];
  verdict: string;
}

const HIGH_AFFINITY_DIRECTORS = [
  'Christopher Nolan',
  'David Fincher',
  'Quentin Tarantino',
  'Denis Villeneuve',
  'Martin Scorsese',
  'Steven Spielberg',
  'Matthew Vaughn',
  'Guy Ritchie',
  'Damien Chazelle',
  'Edgar Wright',
  'James Cameron',
  'Bong Joon Ho',
  'Peter Jackson',
  'Zack Snyder',
  'J.J. Abrams',
  'Phil Lord,Christopher Miller',
  'Sam Mendes'
];

export function evaluateMovieUnderGauravTaste(movie: {
  title: string;
  year: number;
  director: string;
  genres: string[];
  contentTags?: string[];
  synopsis?: string;
  imdbRating?: number;
}): ContrastiveEvaluation {
  let contrastiveScore = 0;
  const positiveAffinities: string[] = [];
  const negativePenalties: string[] = [];

  const direct = findGauravRating(movie.title, movie.year);

  if (direct) {
    if (direct.rating >= 9) {
      contrastiveScore += (direct.rating === 10 ? 85 : 70);
      positiveAffinities.push(`Rated a stellar ${direct.rating}/10 in Gaurav's personal IMDb vault`);
    } else if (direct.rating >= 8) {
      contrastiveScore += 50;
      positiveAffinities.push(`Rated ${direct.rating}/10 by Gaurav (High tier favourite)`);
    } else if (direct.rating === 7) {
      contrastiveScore += 25;
      positiveAffinities.push(`Rated ${direct.rating}/10 (Solid entertainment)`);
    } else if (direct.rating <= 4) {
      contrastiveScore -= 90;
      negativePenalties.push(`Gaurav rated this only ${direct.rating}/10 (Contrastive Avoid)`);
    } else if (direct.rating === 5) {
      contrastiveScore -= 40;
      negativePenalties.push(`Gaurav rated this a mediocre 5/10`);
    }
  }

  // Director affinity
  const matchedDirector = HIGH_AFFINITY_DIRECTORS.find(d => 
    movie.director.toLowerCase().includes(d.toLowerCase()) || d.toLowerCase().includes(movie.director.toLowerCase())
  );
  if (matchedDirector) {
    contrastiveScore += 35;
    positiveAffinities.push(`Master craft by ${matchedDirector} (High affinity auteur)`);
  }

  // Genre / Trait positive affinities (Mind-bending, High-concept Sci-Fi, Clever twists, Dark Thriller, Sharp Witty Comedy)
  const tags = (movie.contentTags || []).map(t => t.toLowerCase());
  const genres = movie.genres.map(g => g.toLowerCase());

  if (tags.includes('mind-bending') || tags.includes('clever twists')) {
    contrastiveScore += 30;
    positiveAffinities.push('High-concept narrative mechanics & cerebral twists');
  }
  if (genres.includes('sci-fi') && (tags.includes('epic scale') || tags.includes('space odyssey') || tags.includes('stunning visuals'))) {
    contrastiveScore += 25;
    positiveAffinities.push('Immersive worldbuilding & visual splendor');
  }
  if (genres.includes('crime') || genres.includes('mystery') || genres.includes('thriller')) {
    contrastiveScore += 20;
    positiveAffinities.push('High narrative stakes & suspenseful pacing');
  }
  if (genres.includes('animation') && (movie.imdbRating || 0) >= 8.0) {
    contrastiveScore += 25;
    positiveAffinities.push('Peak-tier visual animation & emotional storytelling');
  }

  // Contrastive Negative Penalties (Penalize traits of Gaurav\'s 1-5 star titles: low-effort spoof, bland franchise CGI cash-in, formulaic slasher)
  const titleLower = movie.title.toLowerCase();
  const synopsisLower = (movie.synopsis || '').toLowerCase();

  if (tags.includes('slapstick') || titleLower.includes('parody') || synopsisLower.includes('gross-out')) {
    contrastiveScore -= 50;
    negativePenalties.push('Penalized: Cheap gross-out comedy tropes');
  }
  if (genres.includes('horror') && !tags.includes('clever twists') && !matchedDirector) {
    contrastiveScore -= 20;
    negativePenalties.push('Penalized: Generic horror jump scares');
  }

  let verdict = 'Balanced cinematic pick';
  if (direct && direct.rating >= 9) {
    verdict = `Crown Jewel: Gaurav\'s Personal ${direct.rating}/10 Masterpiece`;
  } else if (contrastiveScore >= 60) {
    verdict = 'High Affinity Match: Exact resonance with Gaurav\'s 9-10/10 favorites';
  } else if (contrastiveScore >= 30) {
    verdict = 'Strong Resonance: Sharply contrasted against mediocre cinema';
  }

  return {
    contrastiveScore,
    isDirectlyRated: !!direct,
    directRating: direct?.rating,
    positiveAffinities,
    negativePenalties,
    verdict
  };
}
