class Api::MessagesController < ApplicationController
  def index
    count = Message.count
    random_offset = rand(count)
    @message = Message.offset(random_offset).first
    respond_to do |format|
      format.html
      format.json { render json: @message }
    end
  end
end
