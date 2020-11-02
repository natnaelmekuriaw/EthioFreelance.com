import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// eslint-disable-next-line no-undef
describe('HelloWorld.vue', () => {
  // eslint-disable-next-line no-undef
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toMatch(msg)
  })
})
