# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
  def contact_email
    ContactMailer.contact_email("asifadiv@gmail.com", "Adiv", "07904952299", @message = "Hello")
  end
end
