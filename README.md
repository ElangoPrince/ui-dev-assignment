# UI Development Assignment 

## Running the Application

- Run npm install
- Start application:
     `npm run start`

## Instructions for the assignment

- The pages should be beautified using scss or sass only.
- All the pages should be fully responsive
- You should be adding animations of your choice to make the application more attractive.
- The pages & components wherever applicable should have loaders
- No UI libraries like bootstrap or material design should be used. The styles should be coded from scratch.
- We are really, really interested in your object oriented development skills, so please solve the problem keeping this in mind. Also handle the edge cases (if any).
- Frequent commits are a huge plus


## Instructions for submitting the assignment

- Create a **private** fork of the repository
- Make the changes & commit/push the code to your fork
- Provide access to `mindship-tech` github account
- Let your contact at Mindship know that you have provided the access
- That's it, our team will take care of the rest :)

## Components
### Home

This component holds logic for listing of public repos of github and one can also search for a repo.

Expected:

- The home page should have a fixed header
- The home page should have a logo and the company name.
- The home page should have two options for searching a repository and to view all repositories.
- When the user clicks on search, the search box will be shown where they enter the search value and click on search to find a repository.
- When the user clicks on view repos, the api will fetch the repositories.
- The repositories will be populated below the action buttons on the home page.


### Image Gallery

Create an image gallery with images provided. (images can be added to the existing list)

To get more of an idea please visit some examples here: https://mdbootstrap.com/docs/standard/plugins/ecommerce-gallery/

- Images should be clickable, upon click it should open and show a preview.
- The preview should allow us to navigate to next and previous images.
- The preview should also allow us to zoom the image.

### Repo Details

The repo details section will open when the user clicks on view repo button in home page list of repos.

- The repo details page should have a sticky header with repo details.
- The repo details page should show contributors list.
- The repo details page should show the commit list (if necessary a virtualised list).