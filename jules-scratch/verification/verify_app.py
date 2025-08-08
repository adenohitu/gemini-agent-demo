from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Home page
    page.goto("http://localhost:5173/")
    expect(page.get_by_text("Instagram", exact=True)).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01-home-feed.png")

    # Login page
    page.goto("http://localhost:5173/login")
    expect(page.get_by_role("button", name="Log in")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/02-login-page.png")

    # User profile page
    page.goto("http://localhost:5173/user/jules_the_dev")
    expect(page.get_by_text("User Profile: jules_the_dev")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/03-user-profile.png")

    # Settings page
    page.goto("http://localhost:5173/settings")
    expect(page.get_by_text("Enable dark mode")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/04-settings-page.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
