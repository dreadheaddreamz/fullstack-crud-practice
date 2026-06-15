require "test_helper"

class TicketsControllerTest < ActionDispatch::IntegrationTest
  test "should get index_page" do
    get tickets_index_page_url
    assert_response :success
  end
end
