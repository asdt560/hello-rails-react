class MessagesController < ApplicationController
  def index
    count = Message.count
    random_offset = rand(count)
    @message = Message.offset(random_offset).first
  end
end
