<?php
namespace OCA\Photos\Dashboard;

use OCA\Photos\AppInfo\Application;
use OCP\AppFramework\Services\IInitialState;
use OCP\IInitialStateService;
use OCP\Util;

class OnThisDay implements \OCP\Dashboard\IWidget
{
    /**
     * @var \OCP\IL10N
     */
    private $l;
    /**
     * @var \OCP\IURLGenerator
     */
    private $url;
    /**
     * @var \OCP\AppFramework\Services\IInitialState
     */
    private $initialState;

    public function __construct(\OCP\IL10N $l, \OCP\IURLGenerator $url, IInitialStateService $initialState)
    {
        $this->l = $l;
        $this->url = $url;
        $this->initialState = $initialState;
    }

    /**
     * @inheritDoc
     */
    public function getId(): string
    {
        return 'photos.onthisday';
    }

    /**
     * @inheritDoc
     */
    public function getTitle(): string
    {
        return $this->l->t('On This Day');
    }

    /**
     * @inheritDoc
     */
    public function getOrder(): int
    {
        return 20;
    }

    /**
     * @inheritDoc
     */
    public function getIconClass(): string
    {
        return 'icon-calendar-dark';
    }

    /**
     * @inheritDoc
     */
    public function getUrl(): ?string
    {
        return $this->url->linkToRoute('photos.page.indexthisday');
    }

    /**
     * @inheritDoc
     */
    public function load(): void
    {
        Util::addScript('photos', 'photos-dashboard');
        $this->initialState->provideInitialState('photos', 'image-mimes', Application::IMAGE_MIMES);
        $this->initialState->provideInitialState('photos', 'video-mimes', Application::VIDEO_MIMES);
    }
}
